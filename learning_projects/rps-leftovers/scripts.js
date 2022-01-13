//debug
let rock = document.querySelector(".hand-circle--rock");
rock.addEventListener("click", changeBackground);

function changeBackground() {
  rock.classList.toggle("debug");
}
//debug