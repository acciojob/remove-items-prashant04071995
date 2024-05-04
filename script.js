//your JS code here. If required.
function removeSelectedColor() {
    // Get the dropdown list by its ID
    var selectElement = document.getElementById('colorSelect');
    
    // Get the index of the currently selected option
    var selectedIndex = selectElement.selectedIndex;

    // Remove the selected option
    selectElement.remove(selectedIndex);
}
