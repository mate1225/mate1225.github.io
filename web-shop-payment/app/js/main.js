/*summery*/
const gls = {
  name: "GLS",
  deliveryTime: "1-2 days",
  price: 5.46,
};
const mpl = {
  name: "MPL",
  deliveryTime: "1-2 days",
  price: 4.16,
};
const dpd = {
  name: "DPD",
  deliveryTime: "1 day",
  price: 6.24,
};
//selectors
//personal
const summeryName = document.getElementById("summeryName");
const summeryAddres = document.getElementById("summeryAddres");
const summeryE_mail = document.getElementById("summeryE_mail");
const summeryTel = document.getElementById("summeryTel");
//delivery
const summeryShipingName = document.getElementById("summeryShipingName");
const summeryShipingPrice = document.getElementById("summeryShipingPrice");
const summeryDeliveryTime = document.getElementById("summeryDeliveryTime");
//total price
const summeryShippingCost = document.getElementById("summeryShippingCost");
const summeryTotal = document.getElementById("summeryTotal");

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
  const inputDoorNumber = document.getElementById("doorNumber").value;
  //object
  const delivery_informationsOBJ = {
    postalCode: inputPostalCode,
    city: inputCity,
    street: inputstreet,
    doorNumber: inputDoorNumber,
  };
  return delivery_informationsOBJ;
}
function delivery_company() {
  //selectors
  const inputGls = document.getElementById("gls");
  const inputMpl = document.getElementById("mpl");
  const inputDpd = document.getElementById("dpd");
  const inputNotes = document.getElementById("notes").value;
  const delivery_companyOBJ = {
    option1: inputGls.checked,
    option2: inputMpl.checked,
    option3: inputDpd.checked,
    notes: inputNotes,
  };
  return delivery_companyOBJ;
}

function display_data() {
  const personal = personal_informations();
  const delivery = delivery_informations();
  const delivery_c = delivery_company();
  //price calculation
  let shipingPrice = 0;
  if (delivery_c.option1) {
    shipingPrice = gls.price;
  } else if (delivery_c.option2) {
    shipingPrice = mpl.price;
  } else if (delivery_c.option3) {
    shipingPrice = dpd.price;
  }
  const sum = 50 + shipingPrice;

  //get delivery data

  const summeryShipingName = document.getElementById("summeryShipingName");
  const summeryShipingPrice = document.getElementById("summeryShipingPrice");
  const summeryDeliveryTime = document.getElementById("summeryDeliveryTime");

  const summeryShippingCost = document.getElementById("summeryShippingCost");
  const summeryTotal = document.getElementById("summeryTotal");
  //displaying data to user
  //personal
  const deliveryData =
    delivery.postalCode +
    " " +
    delivery.city +
    " " +
    delivery.street +
    " " +
    delivery.doorNumber;
  summeryName.textContent = personal.name;
  summeryE_mail.textContent = personal.e_mail;
  summeryTel.textContent = personal.tel;
  summeryAddres.textContent = deliveryData;

  /*  summeryShipingName.textContent = ;
  summeryShipingPrice.textContent = ;
  summeryDeliveryTime.textContent = ;
  summeryShippingCost.textContent = ; */
  summeryTotal.textContent = sum + " euro";

  if (delivery_c.option1) {
    summeryShipingName.textContent = gls.name;
    summeryShipingPrice.textContent = gls.price + " euro";
    summeryDeliveryTime.textContent = gls.deliveryTime;
    summeryShippingCost.textContent = gls.price + " euro";
  } else if (delivery_c.option2) {
    summeryShipingName.textContent = mpl.name;
    summeryShipingPrice.textContent = mpl.price + " euro";
    summeryDeliveryTime.textContent = mpl.deliveryTime;
    summeryShippingCost.textContent = mpl.price + " euro";
  } else if (delivery_c.option3) {
    summeryShipingName.textContent = dpd.name;
    summeryShipingPrice.textContent = dpd.price + " euro";
    summeryDeliveryTime.textContent = dpd.deliveryTime;
    summeryShippingCost.textContent = dpd.price + " euro";
  }
}

//events

nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const personal = personal_informations();
    const delivery = delivery_informations();
    const delivery_c = delivery_company();
    if (formSteps === 0 && personal.name && personal.e_mail && personal.tel) {
      next_UpdateFormSteps();
      updateProgressBar();
    } else if (
      formSteps === 1 &&
      delivery.postalCode &&
      delivery.city &&
      delivery.street
    ) {
      next_UpdateFormSteps();
      updateProgressBar();
    } else if (
      formSteps === 2 &&
      (delivery_c.option1 || delivery_c.option2 || delivery_c.option3)
    ) {
      next_UpdateFormSteps();
      updateProgressBar();
      display_data();
    } else if (formSteps === 3) {
      next_UpdateFormSteps();
      updateProgressBar();
    } else {
      window.alert(
        "You have to fill/select all required fileds marked by '*' simbol"
      );
    }
  });
});
previousBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    previous_UpdateFormSteps();
    updateProgressBar();
  });
});
//prevent the  drowser to us the get  function to the the url
document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  /* const data = new FormData(e.target); */
  console.log("The from has been submitted !!");
};
