# Google Sheet Multi Select Script

This code provides a Google Apps Script for handling multiple selections in a Google Sheets document. It includes two functions: `handleMultipleSelection` and `onEdit`. The code assumes that you are creating a column containing the multi select dropdowns and display the corresponding values in the column next to it. Changes might be needed if your use case is different.

## `handleMultipleSelection`

This function manages the logic for multiple selections. It performs the following steps:

1. Defines constants for multi-select properties, including the column number where the dropdown for the multi select exists(`MULTI_SELECT_COL`), the row number where the multi select starts assuming that the entire column contains the multi select dropdown (`MULTI_SELECT_ROW`), and the sheet name (`MULTI_SELECT_SHEET`) where multi-selection is enabled.

2. Retrieves information about the active cell, including the column number, row number, sheet name, and cell value.

3. Retrieves information about the cell where multiple values should be displayed, as well as the current value and the index of the active value within the list of displayed values.

4. Checks if the active cell is eligible for multi-selection based on the defined constants.

5. Performs actions based on different scenarios:
   - If no value is present, it sets the active value as the displayed value.
   - If the active value is already in the list, it removes it.
   - Otherwise, it adds the active value to the list.

## `onEdit`

This function is an event handler that triggers the `handleMultipleSelection` function whenever an edit is made in the Google Sheets document.

## How to Use

1. Copy the provided code.
2. Open your Google Sheets document.
3. From the menu, go to `Extensions` > `Apps Script`.
4. In the Apps Script editor, paste the copied code into the editor window.
5. Save the script using the disk icon or `Ctrl + S` (`Cmd + S` on Mac).
6. Close the Apps Script editor.

Now, whenever you make an edit in the specified sheet (`MULTI_SELECT_SHEET`) at or beyond the specified row (`MULTI_SELECT_ROW`), the `handleMultipleSelection` function will be called to manage multiple selections. If you wish to change the settings, you can adjust the constants at the beginning of the code.

Note: Ensure that you have appropriate permissions to edit the Google Sheets document and run scripts.
