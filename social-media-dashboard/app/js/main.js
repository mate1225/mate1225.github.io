/*selectors*/

//button
const btn = document.getElementById("btn");
//header
const mainTitle = document.getElementById("mainTitle");
const headerBackground = document.querySelector("header");
const label = document.querySelector("label");
//cards
const cardNumbers = document.querySelectorAll("h4");
const cards = document.querySelectorAll(".cards");
//second title
const secondTitle = document.querySelector("h2");
//footer
const footerText = document.querySelectorAll(".footerText");

/*state*/
const theme = localStorage.getItem("theme");
/*on mount*/
if (theme) {
  document.body.classList.add(theme);
  mainTitle.classList.add("textColor_Dark");
  headerBackground.classList.add("headerBackground_Dark");
  label.classList.add("textColor_Dark");
  for (let i = 0; i < cardNumbers.length; i++) {
    cardNumbers[i].classList.add("textColor_Dark");
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("cardBackground_Light");
    cards[i].classList.add("cardBackground_Dark");
  }
  secondTitle.classList.add("textColor_Dark");
  secondTitle.classList.remove("h2LightMode");

  secondTitle.classList.add("textColor_Dark");

  for (let i = 0; i < footerText.length; i++) {
    footerText[i].classList.add("textColor_Dark");
  }
}
/*handlers*/
function handleThemeToggle() {
  document.body.classList.toggle("darkMode");

  mainTitle.classList.toggle("textColor_Dark");
  headerBackground.classList.toggle("headerBackground_Dark");
  label.classList.toggle("textColor_Dark");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("cardBackground_Light");
    cards[i].classList.toggle("cardBackground_Dark");
  }
  for (let i = 0; i < cardNumbers.length; i++) {
    cardNumbers[i].classList.toggle("textColor_light");
    cardNumbers[i].classList.toggle("textColor_Dark");
  }
  for (let i = 0; i < footerText.length; i++) {
    footerText[i].classList.toggle("textColor_Dark");
  }

  if (document.body.classList.contains("darkMode")) {
    localStorage.setItem("theme", "darkMode");
    secondTitle.classList.remove("h2LightMode");
    secondTitle.classList.add("textColor_Dark");
  } else {
    localStorage.removeItem("theme");
    secondTitle.classList.remove("textColor_Dark");
    secondTitle.classList.add("h2LightMode");
  }
}
/*event*/
btn.addEventListener("click", handleThemeToggle);
