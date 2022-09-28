const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const username = $('#username');
const email = $('#email');
const password = $('#password');
const passwordConfirmation = $('#password-confirm');
const registerForm = $('#register-form');
const inputs = $$('input[name]');
var getParent = (input) => {
    while(input.parentElement) {
        if(input.parentElement.matches('.form-control')){
            return input.parentElement
        }
        input = input.parentElement; 
    }
}

function showError(input, errorMessage = "Invalid value") {
    let formControl = getParent(input);
    let message = formControl.querySelector('small');

    formControl.classList.add('error');
    message.textContent = errorMessage;
}

function showSuccess(input) {
    let formControl = getParent(input);
    let message = formControl.querySelector('small');
    formControl.classList.remove('error');
    message.textContent = null;
}

inputs.forEach((input)  => {
    input.oninput = () => {
        showSuccess(input)
    };
});

function isEmpty(inputsEl) {
    let isEmpty = false;
    if(inputsEl){
        inputsEl.forEach((input) => {
            if(!input.value.trim()){
                isEmpty = true;
                showError(input, `${input.name} is required!`);
            }else {
                showSuccess(input);
            }
        });
    }
    return isEmpty;
}

function isEmailInvalid(input) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(input.value.trim())) {
        showError(input,'Your email address is invalid!');
        return true;
    }else{
        showSuccess(input);
        return false;
    }
}

function isLengthInvalid(input, min, max) {
    
    if(input.value.trim().length > max){
        showError(input, `Value must be lower than ${max} characters!`);
        return true;
    }else if(input.value.trim().length < min){
        showError(input, `Value must be at least ${min} characters long!`);
        return true;
    }


    return false;
}

function isPasswordConfirm(password, passwordConfirmation){
    if(password.value.trim() !== passwordConfirmation.value.trim()){
        showError(passwordConfirmation, 'Wrong password');
        return true;
    }
    return false;
}

function validate (){
    let isEmptyFeild = isEmpty([username, email, password, passwordConfirmation]);
    let isEmailValid = isEmailInvalid(email);
    let userNameLengthInvalid = isLengthInvalid(username, 8, 15);
    let isPasswordLengthInvalid = isLengthInvalid(password, 6, 10);
    let isPasswordConfirmFalse = isPasswordConfirm(password, passwordConfirmation);

    if(isEmptyFeild || isEmailValid || userNameLengthInvalid || isPasswordLengthInvalid || isPasswordConfirmFalse){
        return false;
    }else{
        return true;
    }
}

registerForm.onsubmit = function(e) {
    e.preventDefault();

    if(validate()){
        registerForm.submit();
    }
}