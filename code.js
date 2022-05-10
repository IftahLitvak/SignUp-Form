

// Get handle on all form inputs
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone_number');
const password = document.getElementById('user_password');
const passwordConfirm = document.getElementById('confirm_user_password');
const passwordConfirmError = document.getElementById('confirm_password_error')
passwordConfirm.addEventListener('change', confirmPasswords);

// const errors = document.querySelectorAll('.error');

const inputs = [firstName, lastName, email, phoneNum, password];

// When the user has changed one of the inputs, 
// A class of 'changed' is added so that it can be evaluated to valid or invalid
inputs.forEach(input => input.addEventListener('change', changed));

function changed(e){
    e.target.classList.add('changed');
    checkIfValid(e);
}

function checkIfValid(e){
    let currentID = e.target.id;
    let errorID = currentID + '_error';
    let errorDiv = document.getElementById(errorID);
    if ((e.target.validity.patternMismatch) || (e.target.validity.typeMismatch)){
        errorDiv.style.visibility = 'visible';
    }
    else {
        errorDiv.style.visibility = 'hidden';
    }
}

function confirmPasswords(e){
    if (!password.validity.patternMismatch){
        let userPass = password.value;
        let userPassConfirm = e.target.value;
        if (userPass != userPassConfirm){
            passwordConfirmError.style.visibility = 'visible';
            e.target.style.borderColor = '#f50a0a';
        }
        else {
            passwordConfirmError.style.visibility = 'hidden';
            e.target.style.borderColor = '#15f800';        
        }
    }
    else {
        e.target.style.borderColor = '#E5E7EB';
    }
    
}