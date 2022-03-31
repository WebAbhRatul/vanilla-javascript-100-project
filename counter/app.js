let counter = document.querySelector(".__count__");
let subtruct = document.querySelector(".__subtruct__");
let reset = document.querySelector(".__reset__");
let add = document.querySelector(".__add__");
let buttons = document.querySelector(".__counter__buttons__");

// add.addEventListener("click", function () {
//   counter.innerHTML++;
// });
// subtruct.addEventListener("click", function () {
//   counter.innerHTML--;
//   if (counter.innerHTML < 0) {
//     counter.innerHTML.style.color = "orange";
//   }
// });
buttons.addEventListener("click", function (e) {
  if (e.target.classList.contains("__add__")) {
    counter.innerHTML++;
    counterColor();
  }
  if (e.target.classList.contains("__subtruct__")) {
    counter.innerHTML--;
    counterColor();
  }
  if (e.target.classList.contains("__reset__")) {
    counter.innerHTML = 0;
    counterColor();
  }
});

function counterColor() {
  if (counter.innerHTML > 0) {
    counter.style.color = "yellow";
  } else if (counter.innerHTML < 0) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "#fff";
  }
}

console.log(buttons);
