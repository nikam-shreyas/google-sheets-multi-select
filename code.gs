// Function to handle multiple selection logic
function handleMultipleSelection() {
  // Define constants for multi-select properties
  var MULTI_SELECT_COL = 2; // Column where the multiple selection is allowed
  var MULTI_SELECT_ROW = 2; // Minimum row number where multiple selection is allowed
  var MULTI_SELECT_SHEET = "multi-pic"; // Name of the sheet where multi-selection is enabled

  // Get information about the active cell
  var activeCell = SpreadsheetApp.getActiveRange();
  var activeColumn = activeCell.getColumn();
  var activeRow = activeCell.getRow();
  var activeSheet = activeCell.getSheet();
  var activeValue = activeCell.getValue();

  // Get information about the cell where multiple values are displayed
  var displayCell = activeCell.offset(0, 1);
  var displayValue = displayCell.getValue();
  var duplicateIndex = displayValue.toString().split(",").indexOf(activeValue);

  // Check if the active cell is eligible for multi-selection
  if (
    activeColumn == MULTI_SELECT_COL &&
    activeSheet.getName() == MULTI_SELECT_SHEET &&
    activeRow >= MULTI_SELECT_ROW
  ) {
    if (displayValue == "") {
      // If no value is present, set it to the active value
      displayCell.setValue(activeValue);
    } else if (duplicateIndex != -1) {
      // If active value is already in the list, remove it
      var newList = displayValue
        .toString()
        .split(",")
        .filter(function (x) {
          return x !== activeValue;
        });
      var newValue = newList.join(",");
      displayCell.setValue(newValue);
    } else {
      // Add active value to the list
      var newList = displayValue + "," + activeValue;
      displayCell.setValue(newList);
    }
  }
}

// Function to handle the onEdit event
function onEdit() {
  handleMultipleSelection();
}
