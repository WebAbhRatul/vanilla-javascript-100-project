// Element
let input = document.getElementById("input"),
  btn = document.querySelector(".btn");

function reverse(str) {
  let strin = str.toLowerCase();
  return strin.split("").reverse().join("");
}

btn.addEventListener("click", function () {
  let inputString1 = input.value;
  let inputString2 = input.value.toLowerCase();
  if (inputString2 === reverse(inputString1)) {
    document.querySelector(".result").textContent =
      inputString1 + " is a palindrom number.";
  } else {
    document.querySelector(".result").textContent =
      inputString1 + " is not a palindrom number.";
  }
});
