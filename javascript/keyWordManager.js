// Add keyword from UI
function addKeywordFromUI() {
    const keyword = document.getElementById("newKeyword").value.trim();
    const url = document.getElementById("newURL").value.trim();

    if (keyword && url) {
        addKeyword(keyword, url);
        alert(`Keyword "${keyword}" added!`);
    } else {
        alert("Please enter both a keyword and a URL.");
    }
}

// Remove keyword from UI
function removeKeywordFromUI() {
    const keyword = document.getElementById("newKeyword").value.trim();

    if (keyword) {
        removeKeyword(keyword);
        alert(`Keyword "${keyword}" removed!`);
    } else {
        alert("Please enter a keyword to remove.");
    }
}
