//ORDERING
//
//
//
//keep track of step we are currently in
var currentStep = 0;
//object to hold coffee choices
const coffee = {};
//all stepBoxes go to a static collection
const steps = document.querySelectorAll(".stepBox");
//some text for a html console
const text = document.getElementById("text");
//adding event listeners to all the stepBoxes
function setup(array) {
  array.forEach(element => document.getElementById(element.id).addEventListener("click", checking));
}

setup(steps);
//debug
function logging(string) {
  text.innerHTML = string;
}

//hide current step, show next step
function hideAndShowNext(objToHide, choice) { 
  objToHide.classList.add('hidden');
  if(currentStep < steps.length) {
    objToShow = document.getElementById(steps[currentStep].id);
    objToShow.classList.remove('hidden');
  } else {
    return;
  }
}

//what happens on button press
function checking(event){
  if (event.target.tagName != `BUTTON` || this.id !== steps[currentStep].id) {
    let temp = text.innerHTML;
    logging('press a button to make a choice');
    setTimeout(function(){logging(temp)}, 3000);
    return;
  } 
  console.log(this.id + steps[currentStep].id)
  let getInfo = event.target.dataset;
  getInfo.espresso && (coffee.espresso = getInfo.espresso);

  if (coffee.espresso == "alt") {
  getInfo.method && (coffee.method = getInfo.method);
  getInfo.pl && (coffee.pl = getInfo.pl);
  } else if (coffee.espresso == "espresso") {
  logging(`espresso coffee not implemented yet`);
  return;
  }

  currentStep++;
  hideAndShowNext(this, event.target);
  if (currentStep >= steps.length) {
    logging(`${coffee.pl} na ${coffee.method}, zgadza się?`);
  }
}




// old checking saved as a reference

// function bla(){
//   let done = false;
//   let theButton = event.target;
//   let theParent = event.target.parentElement;
//   switch (theParent.id) {
//     case 'firstStep':
//       if (theButton === "nonespresso") {
//         coffee.espresso = false;
//         document.getElementById("firstStep").style.display = "none";
//         document.getElementById("secondStepAlt").style.display = "block";
//         logging(`Wybrano ${coffee.espresso}`)
//       } else {
//         coffee.espresso = true;
//         logging('Not yet implemented');
//       }
//       break;
//     case 'secondStepAlt':
//       coffee.method = document.activeElement.id;
//       document.getElementById("secondStepAlt").style.display = "none";
//       document.getElementById("thirdStepAlt").style.display = "block";
//       logging(`Wybrano ${coffee.method}`);
//       break;
//     case 'thirdStepAlt':
//         coffee.origin = document.activeElement.id;
//         coffee.wersjaPL = document.activeElement.innerHTML;
//         logging(`${coffee.origin}`);
//         done = true;
//       break;
//     default:
//       logging("something went wrong");
//       break;
//   }
//   // console.log(coffee);


//   if (done === true) {
//     if (coffee.espresso === false) {
//       logging(`${coffee.wersjaPL} na ${coffee.method}, zgadza się?`);
//     }
//   }
// }


//PREPARING
//
//
//
