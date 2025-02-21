// Initialize keywords from localStorage or default to an empty object
function getKeywords() {
    try {
        return JSON.parse(localStorage.getItem('keywords')) || {};
    } catch (e) {
        console.error("Error accessing localStorage:", e);
        return {};
    }
}

function saveKeywords(keywords) {
    try {
        localStorage.setItem('keywords', JSON.stringify(keywords));
    } catch (e) {
        console.error("Error saving to localStorage:", e);
    }
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

// Validate URL function
function isValidURL(str) {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

// Modified Search function
function Search() {
    const input = document.getElementById("search").value.trim();
    const firstChar = input.charAt(0);

    // Direct URL handling with validation
    if (firstChar === "/") {
        const url = "https://" + input.slice(1);
        if (isValidURL(url)) {
            document.location = url;
        } else {
            console.error("Invalid URL:", url);
        }
        return;
    }

    // Load keywords from localStorage
    const keywords = getKeywords();

    // Check if input matches a custom keyword
    if (keywords[input]) {
        document.location = keywords[input];
        return;
    }

    // Fallback to Google search
    if (input !== "") {
        document.location = "https://www.google.com/search?q=" + encodeURIComponent(input);
    }
}

// Example: Pre-load default keywords only if storage is empty
if (Object.keys(getKeywords()).length === 0) {
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
