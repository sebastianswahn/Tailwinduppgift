const requestForm = document.querySelector("#requestForm");

requestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateName();
  validateCountry();
  validateCity();
  validateTravelersAmount();
  validateCheckBox();
  validateRequest();
  validateTravelDate();
  validateReturnDate();
});

function validateName() {
  const journeyName = document.querySelector("#journeyName");
  const journeyNameError = document.querySelector("#journeyNameError");
  if (journeyName.value.trim() === "") {
    journeyNameError.textContent = "You need to choose a name";
  } else if (journeyName.value.trim().length <= 6) {
    journeyNameError.textContent =
      "The name needs to contain more than 5 characters";
  } else {
    journeyNameError.textContent = "";
  }
}

function validateCountry() {
  const country = document.querySelector("#country");
  const countryError = document.querySelector("#countryError");
  if (country.value.trim() === "") {
    countryError.textContent = "You need to choose a country";
  } else if (country.value.trim().length <= 3) {
    countryError.textContent =
      "The country needs to contain more than 2 characters";
  } else {
    countryError.textContent = "";
  }
}

function validateCity() {
  const city = document.querySelector("#city");
  const cityError = document.querySelector("#cityError");
  if (city.value.trim() === "") {
    cityError.textContent = "You need to choose a country";
  } else if (city.value.trim().length <= 3) {
    cityError.textContent = "The city needs to contain more than 2 characters";
  } else {
    cityError.textContent = "";
  }
}

function validateTravelersAmount() {
  const travelers = document.querySelector("#amount");
  const amountError = document.querySelector("#amountError");
  if (travelers.value.trim() === "" || 0) {
    amountError.textContent = "You need to choose amount of travelers";
  } else if (travelers.value >= 32) {
    amountError.textContent = "Amount of travelers can't be more then 32";
  } else {
    amountError.textContent = "";
  }
}

function validateCheckBox() {
  const private = document.querySelector("#private");
  const business = document.querySelector("#business");
  const checkBoxError = document.querySelector("#checkBoxError");
  var checkBoxes = business && private;
  if (private && business.checked) {
    checkBoxError.textContent = "You can only chose business OR private";
  } else if (!checkBoxes.checked) {
    checkBoxError.textContent = "You need to choose private or business";
  } else {
    checkBoxError.textContent = " ";
  }
}

function validateRequest() {
  const request = document.querySelector("#otherRequests");
  const requestsError = document.querySelector("#otherRequestsError");
  if (request.value.trim() === "") {
    requestsError.textContent = "You need to make a request";
  } else if (request.value.trim().length <= 36) {
    requestsError.textContent =
      "Your request needs to be at least 36 characters";
  } else {
    requestsError.textContent = "";
  }
}

function validateTravelDate() {
  const travelDate = document.querySelector("#travelDate");
  const travelDateError = document.querySelector("#travelDateError");
  if (travelDate.value === null) {
    travelDateError.textContent = "You need to pick a date you wish to travel";
  } else {
    travelDateError.textContent = "";
  }
}
function validateReturnDate() {
  const returnDate = document.querySelector("#returnDate");
  const returnDateError = document.querySelector("#returnDateError");
  console.log(travelDate);
  if (returnDate.value === null) {
    returnDateError.textContent =
      "You need to pick a date you wish to come home";
  } else {
    returnDateError.textContent = "";
  }
}
