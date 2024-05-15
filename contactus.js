document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMsg');

    if (!form) {
        console.error('The form is not found. Check the ID.');
        return;
    }

    const nameInput = document.getElementById('name');
    if (!nameInput) {
        console.error('The name input field is not found. Check the ID.');
        return;
    }

    // Listen for input events on the name input field
    nameInput.addEventListener('input', function(event) {
        // Remove any non-alphabetic characters (except spaces)
        nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, '');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the actual form submission

        console.log('Form submitted. Showing the thank you message.');

        thankYouMessage.style.display = 'block'; // Show the thank you message
    });
});
