let input = document.getElementById("input"),
  button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let count = 0;
  const regex = /[A,E,I,O,U,a,e,i,o,u]/g;
  let text = input.value;
  let textArray = text.split("");
  for (let i = 0; i < textArray.length; i++) {
    let vowel = textArray[i];
    if (vowel.match(regex)) {
      count++;
    }
  }
  document.querySelector(".result").innerHTML = `${text} has ${count} vowels`;
});
