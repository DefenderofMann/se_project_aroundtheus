function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector("#" + inputEl.id + "error");
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textInput = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
}

function checkInputValidity(formEl, inputEl, config) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, config);
  } else {
    hideInputError(formEl, inputEl, config);
  }
}

function toggleButtonState(inputEls, submitButton, inactiveButtonClass ) {
  const foundInvalid = false;
  inputEls.forEach((inputEl), => {
    if(!inputEl.validity.valid) {
      foundInvalid = true;
    }
  });
   if(foundInvalid){
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
   }
   else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = true;
   }
};

function setEventListeners(formEl, config) {
  const { inputSelector } = config;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(".modal__button");
  inputEls.forEach((inputEl) => {
    inputEls.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl, config);
      toggleButtonState(inputEls, submitButtonSelector, config);
    });
  });
}

function enableValidation(config) {
  const formEls = [...document.querySelectorAll(config, formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, config);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_visible",
};

enableValidation(config);

console.log("herro");