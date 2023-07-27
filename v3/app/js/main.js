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
function personal_informations() {
  //selectors
  const inputName = document.getElementById("name").value;
  const inputE_mail = document.getElementById("e_mail").value;
  const inputTel = document.getElementById("tel").value;
  const telValue = inputTel.replaceAll(" ", "");
  //object
  const personal_informationsOBJ = {
    name: inputName,
    e_mail: inputE_mail,
    tel: telValue,
  };
  return personal_informationsOBJ;
}
function delivery_informations() {
  //selectors
  const inputPostalCode = document.getElementById("postalCode").value;
  const inputCity = document.getElementById("city").value;
  const inputstreet = document.getElementById("street").value;
  //object
  const delivery_informationsOBJ = {
    postalCode: inputPostalCode,
    city: inputCity,
    street: inputstreet,
  };
  return delivery_informationsOBJ;
}
//events
nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const personal = personal_informations();
    const delivery = delivery_informations();

    if (formSteps === 0 && personal.name && personal.e_mail && personal.tel) {
      next_UpdateFormSteps();
      updateProgressBar();
      console.log(formSteps);
    }
    if (
      formSteps === 1 &&
      delivery.postalCode &&
      delivery.city &&
      delivery.street
    ) {
      next_UpdateFormSteps();
      updateProgressBar();
      console.log(formSteps);
    }
  });
});
previousBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    previous_UpdateFormSteps();
    updateProgressBar();
  });
});
//bug: gvalamiért frissíti az oldalt amikor a 2. oldalt kitöltöm és rányomok a "Next Page" gombra
