// Searching Google function
function Search() {
    let input = document.getElementById("search").value;
    let firstChar = input.charAt(0);
    let website = input.replace('/', 'https://');
    if (firstChar == "/") {
        document.location = (website)
    }
    else {
        if (input > "") {
            document.location = ("https://www.google.com/search?q=" + input);
        }
        if (input == "chat") {
            document.location = ("https://chat.openai.com");
        }
        if (input == "maps") {
            document.location = ("https://www.google.com/maps/search/%s?hl=en&source=opensearch");
        }
        if (input == "flix") {
            document.location = ("https://www.netflix.com");
        }
        if (input == "speed") {
            document.location = ("http://speedtest.net");
        }
        if (input == "sap") {
            document.location = ("https://web.whatsapp.com");
        }
        if (input == "yt") {
            document.location = ("https://www.youtube.com/");
        }
        if (input == "vle") {
            document.location = ("https://my.lsbu.ac.uk/campusm/home#menu");
        }
        if (input == "youtube") {
            document.location = ("https://www.youtube.com/");
        }
        if (input == "incase") {
            document.location = ("https://incase.wtf")
        }
    }
}
