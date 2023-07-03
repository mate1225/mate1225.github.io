"use strict";
var btn = document.getElementById("btn"),
  h1Element = document.querySelector("h1"),
  h2Element = document.querySelector("h2"),
  headerBackground = document.querySelector("header"),
  theme = localStorage.getItem("theme");
function handleThemeToggle() {
  document.body.classList.toggle("darkMode"),
    document.body.classList.contains("darkMode")
      ? localStorage.setItem("theme", "darkMode")
      : localStorage.removeItem("theme");
}
theme && document.body.classList.add(theme),
  btn.addEventListener("click", handleThemeToggle);
//# sourceMappingURL=main.js.map
