document.getElementById('mealForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const dayOfWeek = document.getElementById('dayOfWeek').value;
    const mealType = document.getElementById('mealType').value;
    const mealDescription = document.getElementById('mealDescription').value;

    // Check if meal description is empty
    if (!mealDescription.trim()) {
        alert("Please enter a meal description.");
        return; // Stop execution if description is empty
    }

    // Create a new list item for the meal
    const listItem = document.createElement('li');
    listItem.textContent = `${dayOfWeek} - ${mealType}: ${mealDescription}`;

    // Find the appropriate list for the day and append the new meal
    const dayList = document.getElementById(dayOfWeek.toLowerCase() + 'Meals');
    if (!dayList) {
        // If no list exists for this day, create one
        const newList = document.createElement('ul');
        newList.id = dayOfWeek.toLowerCase() + 'Meals';
        document.body.appendChild(newList);
        newList.appendChild(listItem);
    } else {
        dayList.appendChild(listItem);
    }

    // Reset the form after submission
    document.getElementById('mealForm').reset();
});
