var inProgress = 0;
var currentTask = 0;
var finishedEquation = false;

function calcWrapUp(){
  inProgress = 0;
  currentTask = 0;
  finishedEquation = true;
}

function calcShowProgress(whatToShow) {
  document.getElementById("holdingArea").value = whatToShow;
}

function calcUpdateScreens(updateValue) {
  document.getElementById("mainOutput").value = updateValue;
  calcShowProgress(inProgress);
}

function calcClearMain() {
  document.getElementById("mainOutput").value = 0;
}

function calcClearScreen() {
  calcClearMain();
  calcShowProgress("");
  currentTask = 0;
  inProgress = 0;
}

function calcSetA() {
  var a = Number(document.getElementById("mainOutput").value);
  return a;
}

function calcSetB() {
  var b = inProgress;
  return b;
}

function calcCheckLength() {
  //to avoid overflow
  if (document.getElementById("mainOutput").value.length > 14)
  document.getElementById("mainOutput").value = document.getElementById("mainOutput").value.slice(0, 14);
}

function calcInsertNum(num) {
  if (finishedEquation == true) {
    calcClearScreen();
    finishedEquation = false;
  }

  //manage zeros on the beginning
  if (document.getElementById ("mainOutput").value == "0") {
    document.getElementById ("mainOutput").value = "";
  }
  document.getElementById ("mainOutput").value += num;
  calcCheckLength();
}

function calcInsertPoint() {
  var i;
  var currentValue = String(document.getElementById("mainOutput").value);
  //check if there is a point already
  for (i=0; i < currentValue.length; i++) {
    if (currentValue[i] == ".") {
      return;
    }
  }
  document.getElementById ("mainOutput").value += ".";
}

function calcEqualsButton() {
  if (calcEquals() == 1) {
    console.log("test");
    calcShowProgress("Don't divide by 0 you mooncalf");
  }
  else {
  calcWrapUp();
  calcShowProgress("");
  }
}

function calcEquals() {
  
  switch (currentTask){
  case 0:;
    break;
  case 1:
    calcAddition();
    break;
  case 2:
    calcSubstraction();
    break;
  case 3:
    calcMultiplication();
    break;
  case 4:
    if (calcDivision() == 1) {
      return 1;
    }
    else {
    break;
    }
  default:;
    break;
  }
}

function calcAddition()
{
  var a = calcSetA();
  var b = calcSetB();
  inProgress = Number(Number(a+b).toFixed(12)); //manage point precision
  calcUpdateScreens(inProgress);
  console.log(inProgress);
}

function calcAdditionButton() {
 
  finishedEquation = false;

  if (currentTask == 0) {
    currentTask = 1;
    inProgress = calcSetA();
    calcClearMain();
  }
  else {
    calcEquals();
    currentTask = 1;
    calcClearMain();
  }
  calcClearMain();
}

function calcSubstractionButton() {
  finishedEquation = false;

  if (currentTask == 0) {
    currentTask = 2;
    inProgress = calcSetA();
    calcClearMain();
  }
  else {
    calcEquals();
    currentTask = 2;
    calcClearMain();
  }
  calcClearMain();
}

function calcSubstraction() {
  var a = calcSetA();
  var b = calcSetB();
  inProgress = Number(Number(b-a).toFixed(12)); //manage point precision
  calcUpdateScreens(inProgress);
  console.log(inProgress);
}

function calcMultiplicationButton() {
  finishedEquation = false;

  if (currentTask == 0) {
    currentTask = 3;
    inProgress = calcSetA();
    calcClearMain();
  }
  else {
    calcEquals();
    currentTask = 3;
    calcClearMain();
  }
  calcClearMain();
}

function calcMultiplication() {
  var a = calcSetA();
  var b = calcSetB();
  inProgress = Number(Number(a*b).toFixed(12)); //manage point precision
  calcUpdateScreens(inProgress);
  console.log(inProgress);
}

function calcDivisionButton() {
  finishedEquation = false;

  if (currentTask == 0) {
    currentTask = 4;
    inProgress = calcSetA();
    calcClearMain();
  }
  else {
    calcEquals();
    currentTask = 4;
    calcClearMain();
  }
  calcClearMain();
}

function calcDivision() {
  var a = calcSetA();
  var b = calcSetB();
  if (a == 0) {
    calcShowProgress("Don't divide by 0 you mooncalf");
    return 1;
  }
  else {
  inProgress = Number(Number(b/a).toFixed(12)); //manage point precision
  calcUpdateScreens(inProgress);
  }
}