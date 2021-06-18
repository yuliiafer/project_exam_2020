const form = document.querySelector(".contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("Submitted");
// select by id first name and error
const validateFirstName = document.querySelector("#firstName");
const validateFirstNameEr = document.querySelector("#firstNameError");
// first name 
const firstNameVal = validateFirstName.value;
    if (checkInputLength(firstNameVal) === true) {
        validateFirstNameEr.style.display = "none";
    } else {
        validateFirstNameEr.style.display = "block";
    }
// select by id last name end error
const validateLastName = document.querySelector("#lastName");
const validateLastNameEr = document.querySelector("#lastNameError");
// validate last name
const lastNameVal = validateLastName.value;
    if (checkInputLength(lastNameVal) === true) {
        validateLastNameEr.style.display = "none";
    } else {
        validateLastNameEr.style.display = "block";
    }
// select by id EMAIL and error
const validateEmail = document.querySelector("#email");
const validateEmailEr = document.querySelector("#emailError");
const validateEmailInvalid = document.querySelector("#invalidEmailError");
// validate email
const emailVal = validateEmail.value;
    if (checkInputLength(emailVal) === true) {
        validateEmailEr.style.display = "none";
    } else {
        validateEmailEr.style.display = "block";
    }
    // email invalid
    if (validMail(emailVal) === true) {
        validateEmailInvalid.style.display = "none";
    } else {
        validateEmailInvalid.style.display = "block";
    }
// function validate
function checkInputLength(value) {
        const trValue = value.trim();
        if (trValue.length > 0) {
            return true;
        } else {
            return false;
        }
}
// function validate email with regex
function validMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
// select message and error by id
const validateMessage = document.querySelector("#message");
const validateMessageEr = document.querySelector("#messageError");
// validate
const messageVal = validateMessage.value;
    if (checkMessageLength(messageVal) === true) {
        validateMessageEr.style.display = "none";
    } else {
        validateMessageEr.style.display = "block";
    }
// create a function that check length of value with trim, >=10
function checkMessageLength(value) {
    const trValue = value.trim();
        if (trValue.length >= 10) {
            return true;
        } else {
            return false;
        }
}
}