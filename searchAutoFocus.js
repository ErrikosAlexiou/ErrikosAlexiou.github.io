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