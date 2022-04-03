// Create Variables
let glink = document.querySelector(".glink");
let btn = document.querySelector(".btn");
let downloadLink = document.getElementById("download-link");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const glinkValue = glink.value;
  const confirmGlink = glinkValue.includes("https://drive.google.com/file/d/");
  if (confirmGlink == true) {
    const getDownloadLink = glink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=sharing", "");
    downloadLink.value = getDownloadLink;
  }
});
