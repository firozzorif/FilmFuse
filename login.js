let container = document.getElementById('container');

// Function to toggle between sign-up and sign-in sections
let toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

// Function to handle sign-up process
let signUp = () => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    displayMessage('Registered!'); // Display the message


    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';


    setTimeout(() => {
        toggle(); // Call the toggle function to switch to sign-in section
        hideMessage(); // Hide the message again
    }, 3);
};

// Function to display message
let displayMessage = (message) => {
    let messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.display = 'block';
};

// Function to hide message
let hideMessage = () => {
    document.getElementById('message').style.display = 'none';
};

// Automatically switch to sign-in section after a delay on page load
setTimeout(() => {
    container.classList.add('sign-in');
}, 200);
