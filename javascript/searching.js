// Initialize keywords from localStorage or default to an empty object
function getKeywords() {
    return JSON.parse(localStorage.getItem('keywords')) || {};
}

function saveKeywords(keywords) {
    localStorage.setItem('keywords', JSON.stringify(keywords));
}

// Add a new keyword
function addKeyword(keyword, url) {
    const keywords = getKeywords();
    keywords[keyword] = url;
    saveKeywords(keywords);
}

// Remove a keyword
function removeKeyword(keyword) {
    const keywords = getKeywords();
    delete keywords[keyword];
    saveKeywords(keywords);
}

// Modified Search function
function Search() {
    const input = document.getElementById("search").value.trim();
    const firstChar = input.charAt(0);

    // Direct URL handling
    if (firstChar === "/") {
        document.location = input.replace("/", "https://");
        return;
    }

    // Load keywords from localStorage
    const keywords = getKeywords();

    // Check if input matches a custom keyword
    if (keywords[input]) {
        document.location = keywords[input];
        return;
    }

    // Fallback to Google search or hard-coded defaults
    if (input !== "") {
        document.location = "https://www.google.com/search?q=" + input;
    }
}

// Example: Pre-load default keywords (only on first load)
if (!localStorage.getItem('keywords')) {
    saveKeywords({
        "chat": "https://chat.openai.com",
        "maps": "https://www.google.com/maps",
        "flix": "https://www.netflix.com",
        "speed": "http://speedtest.net",
        "sap": "https://web.whatsapp.com",
        "yt": "https://www.youtube.com/",
        "vle": "https://my.lsbu.ac.uk/campusm/home#menu",
        "incase": "https://incase.wtf"
    });
}
