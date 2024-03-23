function enableValidation(validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationConfig);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, validationConfig);
        toggleButtonState(inputList, buttonElement, validationConfig);
      });
    });
    setEventListenersForm(formElement, validationConfig);
  });
};
  
  function setEventListenersForm(formElement, validationConfig) {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement, validationConfig);
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, validationConfig);
        toggleButtonState(inputList, buttonElement, validationConfig);
      });
    });
  }
  
const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    if(inputElement.validity.patternMismatch) {
      showInputError(formElement, inputElement, inputElement.dataset.errorMessage, validationConfig);
    } else {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    }
    } else {
      hideInputError(formElement, inputElement, validationConfig);
    }
  };
  
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.classList[1]}_error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  
};
  
const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.classList[1]}_error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = '';
};
  
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};
  
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disable = true;
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
    } else {
      buttonElement.disable = false;
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
  };
  
  const clearValidation = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, validationConfig);
    });
  
    toggleButtonState(inputList, buttonElement, validationConfig);
  };
  
export { enableValidation, clearValidation };
  