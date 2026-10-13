// making the clock work
function myTime() {
    setInterval(() => {
        var date = new Date();
        var hour = date.getHours();
        var current_time = appendZero(hour) + ":" + appendZero(date.getMinutes()) + ":" + appendZero(date.getSeconds());
        function appendZero(num) {
            if (num < 10) { return "0" + num; } return num;
        };
        document.getElementById("Title").innerHTML = current_time.replace(/\d/g, '<span class="time-digit">$&</span>');

    }, 1000);
}
myTime()
