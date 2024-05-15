document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signin-form");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Retrieve user data from session storage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        // Check if the provided credentials match the stored data
        if (username === storedUsername && password === storedPassword) {
            // Redirect to dashboard
            window.location.href = "dashbo.html";
        } else {
            // Display an error message for invalid credentials
            alert("Invalid username or password. Please try again.");
        }
    });

    // Check if the user is already signed in
    const storedUsername = loaclStorage.getItem("username");
    if (storedUsername) {
        // Redirect to dashboard
        window.location.href = "dashbo.html";
     }
});
