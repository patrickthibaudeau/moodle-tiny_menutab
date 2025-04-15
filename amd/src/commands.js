import {getButtonImage} from 'editor_tiny/utils';
import {get_string as getString} from 'core/str';
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
    // TODO: This would change the case of the html tags as well.
    // But the TinyMCE editor should correct that automatically.
    let selectedText = editor.selection.getContent();

    // Add <h2> tags around the selected text.
    editor.selection.setContent(`<h2>${selectedText}</h2>`);

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
        // Register the Moodle SVG as an icon suitable for use as a TinyMCE toolbar button.
        editor.ui.registry.addIcon(icon, buttonImage.html);

        // Register the lowercase Toolbar Button.
        editor.ui.registry.addButton(buttonName, {
            icon: icon,
            tooltip: buttonImageText,
            onAction: () => addTab(editor),
        });
    };
};