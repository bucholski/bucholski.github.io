

let theDay = Date.now() + 1210000000;
setup();

function setup() {
  setTime();
}

function timeNow() {
  let now = new Date(Date.now());
  return now;
}

function setTime() {
  let difference = (theDay - timeNow()) / 1000;
  let daysLeft = Math.floor(difference / 86400);
  difference = Math.floor(difference % 86400);
  if (daysLeft < 10) {
    daysLeft = "0" + daysLeft;
  }
  let hoursLeft = Math.floor(difference / 3600)
  difference = (difference % 3600);
  if (hoursLeft < 10) {
    hoursLeft = "0" + hoursLeft;
  }
  let minutesLeft = Math.floor(difference / 60)
  difference = (difference % 60);
  if (minutesLeft < 10) {
    minutesLeft = "0" + minutesLeft;
  }
  let secondsLeft = difference;
  if (secondsLeft < 10) {
    secondsLeft = "0" + secondsLeft;
  }
  document.querySelector(".days").innerHTML = daysLeft;
  document.querySelector(".hours").innerHTML = hoursLeft;
  document.querySelector(".minutes").innerHTML = minutesLeft;
  document.querySelector(".seconds").innerHTML = secondsLeft;
}

setInterval((setTime), 1000);