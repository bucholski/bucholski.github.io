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
  switch(objToHide.id){
//first I use cases to handle choices that alter the path
  case `stepStart`:
    if (choice.id == `espresso`) {
      document.getElementById('stepEsp-milk').classList.remove('hidden');
      break;
    } else if (choice.id =='nonespresso') {
      document.getElementById('stepAlt-method').classList.remove('hidden');
      break;
    }
  break;
  case `stepEsp-milk`:
    if (choice.id == `black`) {
      document.getElementById('stepEsp-black-kind').classList.remove('hidden');
      break;
    } else if (choice.id =='milk') {
      document.getElementById('stepEsp-milk-kind').classList.remove('hidden');
      break;
    }

//this handles choices that don't alter the path
  default:
    if (objToHide.classList.contains('finish')) {
      break;
    } else { 
      for (let i = 0; i<steps.length; i++) {
        if (objToHide.id == steps.item(i).id) {
          document.getElementById(steps.item(i+1).classList.remove('hidden'));
        }
      }
    }
  }
}



//function hideAndShowNext(objToHide, choice) { 
//   objToHide.classList.add('hidden');
//   if(currentStep < steps.length) {
//     objToShow = document.getElementById(steps[currentStep].id);
//     objToShow.classList.remove('hidden');
//   } else {
//     return;
//   }
// }


//what happens on button press
function checking(event){
  if (event.target.tagName != `BUTTON`) {
    let temp = text.innerHTML;
    logging('press a button to make a choice');
    setTimeout(function(){logging(temp)}, 3000);
    return;
  } 
  // console.log(this.id + steps[currentStep].id)
  let getInfo = event.target.dataset;
  getInfo.espresso && (coffee.espresso = getInfo.espresso);

  if (coffee.espresso == "alt") {
  getInfo.method && (coffee.method = getInfo.method);
  getInfo.origin && (coffee.origin = getInfo.origin);
  } else if (coffee.espresso == "espresso") {
    getInfo.milk && (coffee.milk = getInfo.milk);
    getInfo.kind && (coffee.kind = getInfo.kind);
    getInfo.type && (coffee.type = getInfo.type);
    getInfo.origin && (coffee.origin = getInfo.origin);
  }

  currentStep++;
  hideAndShowNext(this, event.target);
  if (this.classList.contains('finish')) {
    logging(`${coffee.origin} na ${coffee.method}, zgadza się?`);
    console.log(Object.values(coffee));
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
