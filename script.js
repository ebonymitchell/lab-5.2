let username = document.getElementById("username");
let usernameError = document.getElementById("usernameError");

let email = document.getElementById("email");
let emailError = document.getElementById("emailError");

let password = document.getElementById("password");
let passwordError = document.getElementById("passwordError");

let confirmPassword = document.getElementById("confirmPassword");
let confirmPasswordError = document.getElementById("confirmPasswordError");

let registrationForm = document.getElementById("registrationForm");

// Get the saved username from localStorage
let savedUsername = localStorage.getItem("username");

// If a username was found, put it into the username input
if (savedUsername) {
    username.value = savedUsername;
}

// VALIDATE USERNAME: Run every time the user types in the username input
username.addEventListener("input", function () {

    // Check if the required username field is empty
    if (username.validity.valueMissing) {
        usernameError.innerText = "Username is required.";

        // Check if the username is shorter than the minlength="5" rule in the HTML
    } else if (username.validity.tooShort) {
        usernameError.innerText = "Username must be at least 5 characters.";

        // If the username passes both checks, clear the error message
    } else {
        usernameError.innerText = "";
    }
});

// VALIDATE EMAIL: Run every time the user types in the email input
email.addEventListener("input", function () {

    // Check if the required email field is empty
    if (email.validity.valueMissing) {
        emailError.innerText = "Email is required";

        // Check if the email does not match a valid email format
    } else if (email.validity.typeMismatch) {
        emailError.innerText = "Must enter a valid email address";

        // If the email passes both checks, clear the error message
    } else {
        emailError.innerText = "";
    }
});

// VALIDATE PASSWORD: Run every time the user types in the password input
password.addEventListener("input", function () {

    // Check if the required password field is empty
    if (password.validity.valueMissing) {
        passwordError.innerText = "Password is required";

        // Check if the password is shorter than minlength="8"
    } else if (password.validity.tooShort) {
        passwordError.innerText = "Password must be at least 8 characters";

        // Check if the password does not match the pattern in the HTML
        // Password must contain lowercase, uppercase, and a number
    } else if (password.validity.patternMismatch) {
        passwordError.innerText =
            "Password must include an uppercase letter, a lowercase letter, and a number.";

        // If the password passes all checks, clear the error message
    } else {
        passwordError.innerText = "";
    }
});


// VALIDATE CONFIRM PASSWORD: Run every time the user types
confirmPassword.addEventListener("input", function () {

    // Check if the confirm password field is empty
    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.innerText = "Please confirm your password.";

        // Compare the two password values
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.innerText = "Passwords do not match.";

        // If they match, clear the error
    } else {
        confirmPasswordError.innerText = "";
    }
});

// HANDLE FORM SUBMISSION
registrationForm.addEventListener("submit", function (event) {

    // Stop the browser from automatically submitting/reloading the page
    event.preventDefault();

    // Check whether all HTML validation rules pass
    // AND make sure both passwords match
    if (registrationForm.checkValidity() &&
        confirmPassword.value === password.value) {

        // Save the username in the browser
        localStorage.setItem("username", username.value);

        // Tell the user registration was successful
        alert("Registration successful!");

    } else {

        // Find the first input that fails HTML validation
        let firstInvalid = registrationForm.querySelector(":invalid");

        // If an invalid input was found, move the cursor to it
        if (firstInvalid) {
            firstInvalid.focus();

            // If HTML validation passed but passwords don't match,
            // move the cursor to Confirm Password
        } else {
            confirmPassword.focus();
        }
    }
});