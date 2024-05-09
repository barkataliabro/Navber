function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login logic here (e.g., check credentials, redirect to dashboard, etc.)
    // For demonstration, we'll just show a message
    document.getElementById('message').innerText = `Logging in as ${username}...`;
};

function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform signup logic here (e.g., create new user, store credentials, etc.)
    // For demonstration, we'll just show a message
    document.getElementById('message').innerText = `Signing up as ${username}...`;
};
