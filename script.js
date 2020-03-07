//Digital Clock Project
/*
function digiClock() {
    var date = new Date();

    var hours = date.getHours();
    console.log(hours);
}
digiClock();
*/

function digiClock() {
    var date = new Date();

    var hours = date.getHours() + ' ';

    var minutes = date.getMinutes() + ' ';

    var seconds = date.getSeconds() + ' ';

    var day = date.getDay(); + ' ';

    if (hours.length < 2) {

        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    //    To get the hours and minutes and seconds in form of string
    //var clock = hours + ':' + minutes + ':' + seconds;

    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var clock = weekdays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    console.log(clock);
}

digiClock();

setInterval(digiClock, 1000);
