let count = document.querySelector(".count");
let input = document.querySelector("input");

input.addEventListener("keyup", function () {
  count.innerHTML = input.value.length;
});
