
function Clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let next = "AM"

  // to change the prompt
  if (h==0) {
    h=12;
  }
  if (h>12) {
    h=h-12;
    next = "PM"
  }

  // and extra "0" to numbers
  h = getTrueNumber(h);
  m= getTrueNumber(m);
  s = getTrueNumber(s);
  
  // appending to innerHTML
  document.getElementById('clock').innerHTML = h  + ' : ' +  m  + ' : ' + s + ' : ' + next;

}

// setting time interval 
let interval = setInterval(Clock, 1000);

// funtion for extra
function getTrueNumber(x) {
  if (x < 10) {
    return '0' + x
  } else {
    return x    
  }
}