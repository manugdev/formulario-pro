//First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");
//Last Name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");
//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");
//Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");
//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");
//Verify Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");
//Submit
let submitButton = document.getElementById("submit-button");
//Valid
let validClases = document.getElementsByClassName("valid");
let invalidClases = document.getElementsByClassName("error");

//Password Verification
const passwordVerify = (password) => {
  const regex = /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length >= 8;
};
//Text Verification (input contain only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};
//Phone number verification
const phoneVerify = (number) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(number);
};
//Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};
//For empty input - accepts(input, empty error for the input and other errors)
const emptyUpdate = (inputReference, emptyErrorReference, otherErrorReference) => {
  if(!inputReference.value){
    //input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    //input has some content
    emptyErrorReference.classList.add("hide");
  }
};
//For error styleing and displayin error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};
//For no errors 
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

//First Name Validation 
firstNameInput.addEventListener("input", () => {
  if(textVerify(firstNameInput.value)){
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    errorUpdate(firstNameInput, firstNameError);
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError)
  }
});
//Last Name Validation
lastNameInput.addEventListener("input", () => {
  if(textVerify(lastNameInput.value)){
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});
//Email Validation
emailInput.addEventListener("input", () => {
  if(emailVerify(emailInput.value)){
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});
//Phone Validation
phoneInput.addEventListener("input", () => {
  if(phoneVerify(phoneInput.value)){
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate(phoneInput, phoneError);
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});
//Password Validation
passwordInput.addEventListener("input", () => {
  if(passwordVerify(passwordInput.value)){
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    errorUpdate(passwordInput, passwordError);
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});
//Password Verify Validation
verifyPasswordInput.addEventListener("input", () => {
  if(verifyPasswordInput.value === passwordInput.value){
    verifyPasswordError.classList.add("hide");
    validInput(verifyPasswordInput);
  } else {
    errorUpdate(verifyPasswordInput, verifyPasswordError);
    emptyUpdate(verifyPasswordInput, emptyVerifyPasswordError, verifyPasswordError);
  }
});

//Submit Button
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(validClases.length === 6 && invalidClases.length === 0){
    alert("Success, Thank You!");
  } else {
    alert("Error, some inputs are invalid.")
  }
});
