const contactForm = document.querySelector("#contactForm");

const firstName = document.querySelector("input[name='firstName']");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("input[name='lastName']");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("input[name='email']");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("textarea[name='message']");
const messageError = document.querySelector("#messageError");
const formValidMessage = document.querySelector("#formValid");

contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const firstNameIsValid = firstName.value.trim().length;
  const lastNameIsValid = lastName.value.trim().length;
  const emailIsValid = isValidEmail(email.value.trim());
  const messageIsValid = message.value.trim().length >= 10;

  firstNameError.style.display = firstNameIsValid ? "none" : "block";
  lastNameError.style.display = lastNameIsValid ? "none" : "block";
  emailError.style.display = emailIsValid ? "none" : "block";
  messageError.style.display = messageIsValid ? "none" : "block";

  const allValid = firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid;

  if (allValid) {
    formValidMessage.classList.remove("hidden");
  } else {
    formValidMessage.classList.add("hidden");
  }
}

function isValidEmail(email) {
  return /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(email).toLowerCase());
}
