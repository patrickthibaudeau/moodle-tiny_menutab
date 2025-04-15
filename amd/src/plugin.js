// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Tiny tiny_menutab for Moodle.
 *
 * @module      tiny_menutab/plugin
 * @copyright   2025 Patrick Thibaudeau <patrick.thibaudeau@gmail.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getTinyMCE} from 'editor_tiny/loader';
import {getPluginMetadata} from 'editor_tiny/utils';

import {component, pluginName} from './common';
import * as Commands from './commands';
import * as Configuration from './configuration';
import * as Options from './options';

// Setup the tiny_menutab Plugin.
export default new Promise(async(resolve) => {
    // Note: The PluginManager.add function does not support asynchronous configuration.
    // Perform any asynchronous configuration here, and then call the PluginManager.add function.
    const [
        tinyMCE,
        setupCommands,
        pluginMetadata,
    ] = await Promise.all([
        getTinyMCE(),
        Commands.getSetup(),
        getPluginMetadata(component, pluginName),
    ]);

    // Reminder: Any asynchronous code must be run before this point.
    tinyMCE.PluginManager.add(`${component}/plugin`, (editor) => {
        // Register options.
        Options.register(editor);

        // Setup the Commands (buttons, menu items, and so on).
        setupCommands(editor);

        return pluginMetadata;
    });

    resolve([`${component}/plugin`, Configuration]);
});
