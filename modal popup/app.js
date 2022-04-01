// Element
let modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

// function
const openModal = (e) => {
  e.preventDefault();
  modal.style.display = "block";
};
const closeModal = (e) => {
  e.preventDefault();
  modal.style.display = "none";
};

// Event Listener
btn.addEventListener("click", openModal);
modal.addEventListener("click", closeModal);
close.addEventListener("click", closeModal);
