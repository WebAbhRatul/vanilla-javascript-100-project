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
    function copytext(target) {
      if (target.value == "") {
        alert("Please Generate a Download Link");
      } else {
        target.select();
        document.execCommand("copy");
        alert("Download Link Generated");
      }
    }

    const copy = document.querySelector(".copy");
    copy.addEventListener("click", function () {
      return copytext(downloadLink);
    });
  }
});
