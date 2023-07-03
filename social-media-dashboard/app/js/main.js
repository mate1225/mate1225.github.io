// WORK IN PROGRESS!!

//selectors
const btn = document.getElementById("btn");

const h1Element = document.querySelector("h1");
const h2Element = document.querySelector("h2");
const headerBackground = document.querySelector("header");
/*
const h4Elements = document.querySelectorAll("cardNumber");
const cardBackgrounds = document.querySelectorAll("gridItemsBackgrounds");
console.log(cardBackgrounds);
*/
//state
const theme = localStorage.getItem("theme");
//on mount
if (theme) {
  document.body.classList.add(theme);
}
//handlers
function handleThemeToggle() {
  document.body.classList.toggle("darkMode");

  /*
  cardBackgrounds.style.background = "#20222F";
  h4Elements.style.color = "hsla(228, 28%, 20%, 1)";
  */

  if (document.body.classList.contains("darkMode")) {
    localStorage.setItem("theme", "darkMode");
  } else {
    localStorage.removeItem("theme");
  }
}
//event
btn.addEventListener("click", handleThemeToggle);
