document.addEventListener("keypress", () => {
    const searchInput = document.getElementById("search");
    searchInput.focus();
});

document.addEventListener("keyup", () => {
    const searchInput = document.getElementById("search");
    const input = searchInput.value;
    document.title = input || "New Tab";
});

document.addEventListener("keydown", (evt) => {
    const searchInput = document.getElementById("search");

    if (evt.key === "Escape") {
        searchInput.blur();
    }

    if (evt.key === "Enter") {
        handleEnterKey();
    }
});

function handleEnterKey() {
    const searchInput = document.getElementById("search");
    const input = searchInput.value;

    if (input === ":)") {
        const colorArray = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,255,255)'];
        let colorIndex = 0;

        const intervalId = setInterval(() => {
            if (colorIndex >= colorArray.length) {
                clearInterval(intervalId);
                return;
            }
            document.getElementById("Title").style.color = colorArray[colorIndex];
            colorIndex++;
        }, 1000);
    } else {
        Search();
    }
}
