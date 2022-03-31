let hex = document.querySelector(".hex_color");
let generator = document.querySelector(".generator");

const hexGenerator = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

generator.addEventListener("click", hexGenerator);
