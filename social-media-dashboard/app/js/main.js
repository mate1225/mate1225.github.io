/*selectors*/

//button
const btn = document.getElementById("btn");
//global
const descriptionText_h3 = document.querySelectorAll("h3");
//header
const mainTitle = document.getElementById("mainTitle");
const headerBackground = document.querySelector("header");
const label = document.querySelector("label");
//cards
const cardNumbers = document.querySelectorAll("h4");
const cards = document.querySelectorAll(".cards");
const cardTitles = document.querySelectorAll("h5");
/*új */
const names = document.querySelectorAll("h6");
//second title
const secondTitle = document.querySelector("h2");
//footer
const footerText = document.querySelectorAll(".footerText");

/*state*/
const theme = localStorage.getItem("theme");
/*on mount*/
if (theme) {
  btn.checked = false;
  //main theme
  document.body.classList.add(theme);
  //header
  mainTitle.classList.remove("textColor_Light");
  mainTitle.classList.add("textColor_Dark");
  headerBackground.classList.remove("headerBackground_Light");
  headerBackground.classList.add("headerBackground_Dark");
  label.classList.add("textColor_Dark");
  for (let i = 0; i < descriptionText_h3.length; i++) {
    descriptionText_h3[i].classList.remove("grayTextColor_Light");
    descriptionText_h3[i].classList.add("grayTextColor_Dark");
  }

  //main
  secondTitle.classList.remove("h2LightMode");
  secondTitle.classList.add("textColor_Dark");
  //cards
  for (let i = 0; i < cardTitles.length; i++) {
    cardTitles[i].classList.remove("grayTextColor_Light");
    cardTitles[i].classList.add("grayTextColor_Dark");
  }

  for (let i = 0; i < cardNumbers.length; i++) {
    cardNumbers[i].classList.remove("textColor_Light");
    cardNumbers[i].classList.add("textColor_Dark");
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("cardBackground_Light");
    cards[i].classList.add("cardBackground_Dark");
  }
  for (let i = 0; i < names.length; i++) {
    names[i].classList.remove("grayTextColor_Light");
    names[i].classList.add("grayTextColor_Dark");
  }
  //footer
  for (let i = 0; i < footerText.length; i++) {
    footerText[i].classList.add("textColor_Dark");
  }
}
/*handlers*/
function globalsToggle() {
  for (let i = 0; i < descriptionText_h3.length; i++) {
    descriptionText_h3[i].classList.toggle("grayTextColor_Light");
    descriptionText_h3[i].classList.toggle("grayTextColor_Dark");
  }
}
function headerToggle() {
  headerBackground.classList.toggle("headerBackground_Light");
  headerBackground.classList.toggle("headerBackground_Dark");
  label.classList.toggle("textColor_Dark");
  mainTitle.classList.toggle("textColor_Light");
  mainTitle.classList.toggle("textColor_Dark");
}
function mainToggle() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("cardBackground_Light");
    cards[i].classList.toggle("cardBackground_Dark");
  }
  for (let i = 0; i < cardNumbers.length; i++) {
    cardNumbers[i].classList.toggle("textColor_light");
    cardNumbers[i].classList.toggle("textColor_Dark");
  }
  for (let i = 0; i < cardTitles.length; i++) {
    cardTitles[i].classList.toggle("grayTextColor_Dark");
    cardTitles[i].classList.toggle("grayTextColor_Light");
  }
  for (let i = 0; i < names.length; i++) {
    names[i].classList.toggle("grayTextColor_Light");
    names[i].classList.toggle("grayTextColor_Dark");
  }
  secondTitle.classList.toggle("textColor_Dark");
  secondTitle.classList.toggle("h2LightMode");
}

function footerToggle() {
  for (let i = 0; i < footerText.length; i++) {
    footerText[i].classList.toggle("textColor_Dark");
  }
}

function handleThemeToggle() {
  document.body.classList.toggle("darkMode");
  globalsToggle();
  headerToggle();
  mainToggle();
  footerToggle();
  if (document.body.classList.contains("darkMode")) {
    localStorage.setItem("theme", "darkMode");
  } else {
    localStorage.removeItem("theme");
  }
}
/*event*/
btn.addEventListener("click", handleThemeToggle);
