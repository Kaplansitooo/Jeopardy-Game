// Purpose: Contains the titles and themes for the different sections of the website.

const gameTitle = localStorage.getItem("gameTitle");

document.getElementById("page_title").innerText =
  "Introduce the themes for " + gameTitle;
let theme1 = "";
let theme2 = "";
let theme3 = "";
let theme4 = "";
let theme5 = "";
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  theme1 = document.querySelector("#theme1").value;

  theme2 = document.querySelector("#theme2").value;

  theme3 = document.querySelector("#theme3").value;

  theme4 = document.querySelector("#theme4").value;

  theme5 = document.querySelector("#theme5").value;

  window.location.href = "questionsSection.html";
});

export { theme1, theme2, theme3, theme4, theme5 };
