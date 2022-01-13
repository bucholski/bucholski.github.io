const mainDish = ['Specjał', 'Kaszka', 'Śmieci', 'Grohek', 'Knyszka', 'Kanapeczka', 'Pierożek', 'Przekładaniec', 'Rolada'];
const sauce = ['porzeczkowym', 'z posoki', 'lepkim', 'suchym', 'własnym', 'z pięt', 'z kakutasa', 'beszamelowym', 'znalezionym na śmietniku', 'mokrym', 'morskim', 'Szefa Kuchni'];
const side = ['Analette', 'malutkim grohkiem', 'kaszką', 'paprochami', 'niespodzianką', 'ziemniaczkami', 'łodyżką', 'próchnem', 'truchłem', 'listkiem', 'listkami', 'paćką', 'pośladkami', 'nóżkami', 'napletkiem', 'jarzębinką'];
const drinks = ['płyn','woda po ziemniakach', 'pićko', 'hiosza woda', 'hiosze mleko', '"woda"', 'sok z jarzębinki', 'herbatka z listkami', 'kompot z hujoha', 'sucha woda', 'wywar leśny', '"sok" z owoców', 'sok z "owoców"','shake proteinowy', 'hiosze wino'];
const button = document.getElementById(`button`);
var foodText = document.getElementById(`foodText`);
button.addEventListener("click", prepareFood);
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function foodRemoval() {
  foodText.innerHTML = "";
}

function randomizeFood(arr) {
  foodText.insertAdjacentText("beforeend", arr[randInt(0, arr.length-1)]);
}

// function randomizeFood(arr) {
//   foodText.innerHTML += arr[randInt(0, arr.length-1)];
// }

function addFoodText(str) {
  foodText.insertAdjacentText("beforeend", str);
}

// function addFoodText(str) {
//   foodText.innerHTML += str;
// }

// The main function firing on button press:
function prepareFood() {
  foodRemoval();
  randomizeFood(mainDish);
  addFoodText(' z ');
  randomizeFood(side);
  addFoodText(' w sosie ');
  randomizeFood(sauce);
  addFoodText(', a do picia ');
  randomizeFood(drinks);
  addFoodText('.');
}

