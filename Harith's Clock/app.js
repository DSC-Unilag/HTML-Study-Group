const fullDate = new Date();
console.log(fullDate);

function clock(){
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
    var day = fullDate.getDate();
    var month = fullDate.getMonth() + 1;
    var year = fullDate.getFullYear();
    
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(mins < 10) {
        mins = "0" + mins;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML =":" + mins;
    document.getElementById('second').innerHTML = ":" + seconds;
    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = "/" + month;
    document.getElementById('year').innerHTML = "/" + year;
}

setInterval(clock, 1000);