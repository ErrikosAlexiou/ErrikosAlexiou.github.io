// when any button is clicked the search bar will be focused and typed
document.onkeypress = function () { document.getElementById("search").focus(); };

//when any button is released the title of the page will update with what is typed into the search bar
document.onkeyup = function () {
    let input = document.getElementById("search").value;
    if (input > "") {
        let input = document.getElementById("search").value;
        document.title = input;
    }
    else { document.title = "New Tab" }
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    //when the ESC button is clicked the search bar will be unfocused
    if (evt.keyCode == 27) {//27 is the code for escape
        document.getElementById("search").blur();
    }

    //when the ENTER button is clicked the search bar will search Google
    if (evt.keyCode == 13) {//13 is the code for enter
        let input = document.getElementById("search").value;
        if (input == ":)") {
            colorarry = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,255,255)'];
            var colornum = 0;
            var InterID = setInterval(() => {
                if (colornum >= colorarry.length - 1) {
                    clearInterval(InterID)
                }
                // console.log(colornum);
                document.getElementById("Title").style.color = (colorarry[colornum]);
                colornum++
            }, 1000);
        }
        else { Search(); }
    };
}

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
        if (input == "youtube") {
            document.location = ("https://www.youtube.com/");
        }
        if (input == "incase")j {
            document.location = ("https://incase.wtf");
        }
    }
}

// drawing dots all over the page at the mouse position
isPressed = false;
onmousemove = function (e) {
    //Logging purposes
    // console.log("mouse location:", e.clientX, e.clientY);

    //meat and potatoes of the snippet
    var pos = e;
    var dot;
    dot = document.createElement('div');
    dot.className = "dot";
    dot.style.left = pos.x + "px";
    dot.style.top = pos.y + "px";
    onmousedown = function () {
        isPressed = true;
    }
    onmouseup = function () {
        isPressed = false;
    }
    if (isPressed == true) {
        // console.log(isPressed);
        document.body.appendChild(dot);
    }
}

// making the clock work
function myTime() {
    setInterval(() => {
        var date = new Date();
        var hour = date.getHours();
        hour = (hour > 12) ? hour - 12 : hour;
        hour = (hour == '00') ? 12 : hour;
        var current_time = appendZero(hour) + ":" + appendZero(date.getMinutes()) + ":" + appendZero(date.getSeconds());
        function appendZero(num) {
            if (num < 10) { return "0" + num; } return num;
        };
        document.getElementById("Title").innerHTML = current_time;

    }, 0);
}
myTime()
