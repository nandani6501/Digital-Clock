setInterval(displayClock, 500);
function displayClock() {
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var day = time.getDay();
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();

    if (hours > 12) {
        hours = hours - 12;
        document.getElementById('period').innerHTML = "PM";
    }
    

    if (hours == 0) {
        hours = 12;
        document.getElementById('period').innerHTML="AM";
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    if (min < 10) {
        min = '0' + min;
    }

    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById('day').innerHTML = weekdays[day] + ", ";
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = mon[month];
    document.getElementById('year').innerHTML = year;
    document.getElementById('hour').innerHTML = hours + " : " + min + " : " + sec;

}