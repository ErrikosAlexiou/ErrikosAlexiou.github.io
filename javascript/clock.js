// making the clock work
function myTime() {
    setInterval(() => {
        var date = new Date();
        var hour = date.getHours();
        var current_time = appendZero(hour) + ":" + appendZero(date.getMinutes()) + ":" + appendZero(date.getSeconds());
        function appendZero(num) {
            if (num < 10) { return "0" + num; } return num;
        };
        document.getElementById("Title").innerHTML = current_time;

    }, 0);
}
myTime()