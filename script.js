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