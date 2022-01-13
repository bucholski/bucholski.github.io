let buttonClicks = 0;
let textArray = [`It's starting`, `Be ware`, `HIOH`];
let noise = [];
let timeAmount = 1000;
let soundboard = [new Audio(`audio2.mp3`)];
let button;
let sizeOfFont = 1;
var maxWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

 
function hiohOverload() {
  button.disabled = true;
  hiohUp();
}
    
  
  // document.getElementById("theButton").innerHTML = `WARNING! <br> Clicking will upset hiohs.`;


function hiohUp () {
  noise.push('HIOH');
  button.innerHTML = noise.join(` `);
  button.style.fontSize = `${sizeOfFont}em`
  sizeOfFont += 0.1;
  stackSound('audio2.mp3');
  addSpam(4);
  timeAmount *= 0.9;
  if (timeAmount > 100) { //this determines the duration of the entire process and fast it loops at the peak

  setTimeout(hiohUp, timeAmount);
  } else {
    hiohDown();;
  }
}

function hiohDown () {
  noise.pop();
  button.innerHTML = noise.join(` `);
  addSpam(1);
  button.style.fontSize = `${sizeOfFont}em`;
  sizeOfFont -= 0.1;
  stackSound(`audio2.mp3`);

  timeAmount /= 0.9;
  if (timeAmount <1000) {
    setTimeout(hiohDown, timeAmount);
  } else {
    wrapUp();
  }
}

function stackSound(audioFile) {
  soundboard.push(new Audio(audioFile));
  soundboard[soundboard.length-1].play();
  console.log(soundboard);
  console.log(soundboard.length);
}

function stopSound() {
  soundboard[soundboard.length-1].pause();
  soundboard[soundboard.length-2].pause();
  soundboard[soundboard.length-3].pause();
}
function setup() {
button = document.getElementById("theButton");
}

function addSpam(cycles) {
  for (let i = 0; i < cycles; i++) {
    let div = document.createElement('div');
    div.innerHTML = 'HIOH';
    div.className = 'spam';
    div.style.position = `absolute`;
    div.style.top = rand(500)+"px";
    div.style.left = rand(maxWidth)+"px";
    console.log(maxWidth);
    div.style.fontSize = 1+rand(50) / 10 +"em";
    div.style.transform= `rotate(${rand(360)}deg)`;

    document.body.appendChild(div);
  }
}

function removeSpam() {
  let div = document.getElementsByClassName('spam');
  while (div.length > 0 ) {
  div[0].parentNode.removeChild(div[0]);
  }
}

function rand(maximum) {
  return Math.floor(Math.random()*maximum)
    console.log(rand);
}

function wrapUp() {
  stopSound();
  timeAmount = 1000;
  noise = [];
  soundboard = [];
  removeSpam();
  fontSize = 1;
  document.getElementById("theButton").innerHTML = `WARNING! <br> Clicking will upset hiohs.`;
  button.disabled=false;
}