// Add keyword from UI
function addKeywordFromUI() {
    const keyword = document.getElementById("newKeyword").value.trim();
    const url = document.getElementById("newURL").value.trim();

    if (keyword && url) {
        addKeyword(keyword, url); // Add the keyword to the storage or array
        alert(`Keyword "${keyword}" added!`);
        populateTable(); // Refresh the table after adding the keyword

        // Clear the input fields after adding the keyword
        document.getElementById("newKeyword").value = "";
        document.getElementById("newURL").value = "";
    } else {
        alert("Please enter both a keyword and a URL.");
    }
}


// Remove keyword from UI
function removeKeywordFromUI() {
    const keyword = document.getElementById("newKeyword").value.trim();

    if (keyword) {
        removeKeyword(keyword); // Assuming removeKeyword removes the keyword from storage or an array
        alert(`Keyword "${keyword}" removed!`);
        populateTable(); // Refresh the table after removing the keyword
    } else {
        alert("Please enter a keyword to remove.");
    }
}
