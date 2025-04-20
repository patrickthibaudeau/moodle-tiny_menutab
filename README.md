# Menu/Tab #

This plugin is a TinyMCE plugin for Moodle that allows you to create tabs for 
use with the Menu/Tab course format.

This button adds a button and menu option (insert) in the TinyMCE editor that adds an h2 tag to the selected
text within the editor. The h2 tags are not use within the editor in Moodle and 
therefore, when used with the Menu/Tab course format, the text will be converted to tabs.
If you change the course format to anyother format, the text will remain an 
h2 tag, making it appear as a normal header.

## Using the plugin ##
### IMPORTANT: DO NOT USE SUB SECTIONS. SUBSECTIONS ARE NOT SUPPORTED ###
1. Create a resource using the Text & media area.
2. Type the label you want displayed.
3. Select the text you want to convert to a tab.
4. Click the Menu/Tab button (Add tab) in the TinyMCE editor.
5. To have activities show within the tab, add them immediately after the tab.
6. Add as many "tabs" as you want. Make sure to move the activities related to the tab below each label.
7. If the text is already formatted as a header, select the text and click the Menu/Tab button (Add tab) in the TinyMCE editor.
That will remove the h2 tags.

## Installing via uploaded ZIP file ##
### Requirements ###
- Course format Menu/Tab must be installed in your instance. You can download the
latest version from github: https://github.com/patrickthibaudeau/moodle-format_menutab
- Remeber to use the proper branch for your Moodle version

#### Installation ####
1. Log in to your Moodle site as an admin and go to _Site administration >
   Plugins > Install plugins_.
2. Upload the ZIP file with the plugin code. You should only be prompted to add
   extra details if your plugin type is not automatically detected.
3. Check the plugin validation report and finish the installation.

## Installing manually ##

The plugin can be also installed by putting the contents of this directory to

    {your/moodle/dirroot}/lib/editor/tiny/plugins/menutab

Afterwards, log in to your Moodle site as an admin and go to _Site administration >
Notifications_ to complete the installation.

Alternatively, you can run

    $ php admin/cli/upgrade.php

to complete the installation from the command line.

## License ##

2025 Patrick Thibaudeau <patrick.thibaudeau@gmail.com>

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program.  If not, see <https://www.gnu.org/licenses/>.
