//Purpose: This file is used to get the title of the game from the index.html file.

document.querySelector("form").addEventListener("submit", function (event) {
  const gameTitle = document.getElementById("title").value;
  localStorage.setItem("gameTitle", gameTitle);
  window.location.href = "titleAndThemes.html";
});
