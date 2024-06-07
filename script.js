document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('registrationForm');
    const registrationDisplay = document.getElementById('registrationDisplay');

    form.addEventListener(`submit`, function(event)) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const mealPreference = [];
        document.querySelectorAll('input[name="meal"]:checked').forEach(checkbox => {
            mealPreference.push(checkbox.value);
        });

        // Validate form fields 
        if (name === '' || email === '' || date === '' || mealPreference.length === 0) {
            alert('Please fill out all fields and select at least one meal preference');
            return;
        }

        // Create registration details elements
        const registrationItem = document.createElement('div');
        registrationItem.className = 'registration-item';
        registrationItem.innerHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Event Date: ${date}</p>
            <p>Meal Preference: ${mealPreference.join(", ")}</p>
        `;

        // Append registration details to the display
        registrationDisplay.appendChild(registrationItem);

        // Reset form fields
        form.reset();
    });
});