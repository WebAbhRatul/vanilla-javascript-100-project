let button = document.querySelector(".btn");
let coupon = document.querySelector(".coupon");

button.addEventListener("click", function (e) {
  e.preventDefault();
  coupon.select();
  coupon.setSelectionRange(0, 999999);
  document.execCommand("copy");
  button.textContent = "copied";

  setTimeout(function () {
    button.textContent = "copy";
  }, 3000);
});
