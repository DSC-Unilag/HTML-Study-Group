let dayArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];
let dd = document.getElementById ("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let display = function (day, hr, mn, sec) {
 dd.innerText = dayArr[day];
 hh.innerText = hr;
 mm.innerText = mn;
 ss.innerText = sec;
}

let updateDisplay = function(){
  let dateObj = new Date();
  display(dateObj.getDay(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds());
}

setInterval(updateDisplay, 1000);
