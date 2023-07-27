//basick functions
//selectors
const nextBtn = document.querySelectorAll(".nextBtn");
const previousBtn = document.querySelectorAll(".previousBtn");
const progress_step = document.querySelectorAll(".progress_step");
const progress = document.getElementById("progress");
const cards = document.querySelectorAll(".cards");
//state
let formSteps = 0;
//on mount
//handlers
function next_UpdateFormSteps() {
  cards[formSteps + 1].classList.remove("hide");
  cards[formSteps].classList.add("hide");
  progress_step[formSteps + 1].classList.add("active");
  formSteps++;
}
function previous_UpdateFormSteps() {
  cards[formSteps - 1].classList.remove("hide");
  cards[formSteps].classList.add("hide");
  progress_step[formSteps].classList.remove("active");
  formSteps--;
}
function updateProgressBar() {
  progress.style.width = formSteps * 23.5 + "%";
}

//events
nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    next_UpdateFormSteps();
    updateProgressBar();
  });
});
previousBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    previous_UpdateFormSteps();
    updateProgressBar();
  });
});
