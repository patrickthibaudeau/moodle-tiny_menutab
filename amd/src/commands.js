import {getButtonImage} from 'editor_tiny/utils';
import {get_string as getString} from 'core/str';
import {getCourseFormat} from './options';
import {
    component,
    buttonName,
    icon,
} from './common';

/**
 * Handle the action for your plugin.
 * @param {TinyMCE.editor} editor The tinyMCE editor instance.
 */

const addTab = (editor) => {
    // Get the selected range.
    const range = editor.selection.getRng();
    const container = range.commonAncestorContainer;

    // Check if the selection is within a text node.
    if (container.nodeType === Node.TEXT_NODE) {
        const parent = container.parentNode;

        // Check if the parent is an <h2> tag.
        if (parent && parent.nodeName === 'H2') {
            // Replace the <h2> tag with its inner text.
            const textNode = document.createTextNode(parent.textContent);
            parent.replaceWith(textNode);
        } else {
            // Wrap the selected text in an <h2> tag.
            const h2 = document.createElement('h2');
            h2.textContent = range.toString();
            range.deleteContents();
            range.insertNode(h2);
        }
    }
};

/**
 * Get the setup function for the buttons.
 *
 * This is performed in an async function which ultimately returns the registration function as the
 * Tiny.AddOnManager.Add() function does not support async functions.
 *
 * @returns {function} The registration function to call within the Plugin.add function.
 */
export const getSetup = async() => {
    const [
        buttonImageText,
        buttonImage,
    ] = await Promise.all([
        getString('add_tab', component),
        getButtonImage('icon', component),
    ]);

    return (editor) => {
        // Get the course format option.
        const courseFormat = getCourseFormat(editor);
        // If the course format is menutab, register the button.
        if (courseFormat === 'menutab') {
            // Register the Moodle SVG as an icon suitable for use as a TinyMCE toolbar button.
            editor.ui.registry.addIcon(icon, buttonImage.html);

            // Register the lowercase Toolbar Button.
            editor.ui.registry.addButton(buttonName, {
                icon: icon,
                tooltip: buttonImageText,
                onAction: () => addTab(editor),
            });

            editor.ui.registry.addMenuItem('menutab_menuitem', {
                icon: icon,
                text: buttonImageText,
                onAction: () => addTab(editor),
            });
        }
    };
};