# Interactive User Registration Form

## Description

This project is an interactive registration form built with HTML, CSS, and JavaScript. The form checks the user's information as they type and displays error messages when something is missing or entered incorrectly.

I also used localStorage to save the username so it is still there when the page is refreshed.

## Features

- Real-time form validation
- Custom error messages
- Username, email, and password validation
- Password confirmation
- Focus on the first invalid field
- Successful registration message
- Username saved with localStorage

## Technologies Used

- HTML
- CSS
- JavaScript
- Constraint Validation API
- localStorage

## Reflection Questions

### 1. How did `preventDefault()` help in handling the form submission?

I used `event.preventDefault()` to stop the form from submitting and refreshing the page automatically. This gave my JavaScript a chance to check the information first, show any error messages, and only continue when everything was entered correctly.

### 2. What is the difference between using HTML5 validation attributes and JavaScript validation? Why did you use both?

The HTML validation attributes set the basic rules for the inputs. I used things like `required`, `minlength`, `type`, and `pattern` to tell the browser what each field requires.

JavaScript gave me more control over the validation. I could check those rules while the user was typing and display my own error messages. Using both allowed me to set the rules in the HTML and control the feedback with JavaScript.

### 3. How did you use localStorage to persist and retrieve the username? What are some limitations of using localStorage for sensitive data?

I used `localStorage.setItem()` to save the username after the form was successfully submitted. I used `localStorage.getItem()` when the page loads to check for a saved username and put it back into the username field.

I would not use localStorage for something sensitive like a password because the information is stored in the browser and can be accessed by JavaScript.

### 4. What was a challenge you faced when implementing real-time validation, and how did you solve it?

One challenge was figuring out when the validation messages should appear. Right now, the real-time validation uses the `input` event, so an error appears while the user is typing or if they type something and then erase it. If the user skips a field without entering anything, the required message does not appear until they try to submit the form.

The form still validates correctly when submitted, but I would improve this by having the required error message appear when the user leaves an empty field and moves to the next one. I think that would make the form more user-friendly because the user would know they missed a required field before reaching the end of the form.

### 5. How did you make sure your custom error messages were user-friendly and appeared at the appropriate times?

I used `input` event listeners so the error messages update while the user is typing and disappear once the input is correct. I also added validation to the submit event so all missing or incorrect fields display an error if the user tries to register.

The form also focuses on the first invalid field so the user knows where to start fixing the form. One improvement I would make is displaying the required message as soon as the user leaves an empty field instead of waiting until the form is submitted.