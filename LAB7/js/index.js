// Reference to survey form using the form collection
const form = document.forms["surveyForm"];  // Make sure this matches the form's name in the HTML

// Reference to modal hidden on the page.
const modal = document.getElementById("resultModal");  

// Add a listener to the submit event for the survey form
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Check if form is valid
    // This is a conditional statement. We will cover this later in the semester.
    if (!form.checkValidity()) {
        event.stopPropagation();  // Fixed the typo here
        form.classList.add('was-validated');
        return;
    }

    // Retrieve values from form inputs

document.getElementById("name").textContent = form['name'].value;

document.getElementById("email").textContent = form['email'].value;

document.getElementById("age").textContent = form['age'].value;

document.getElementById("satisfaction").textContent = form['Satisfaction'].value;  

document.getElementById("contactMethod").textContent = form['contactMethod'].value;

document.getElementById("comments").textContent = form['comments'].value;

// show modal with results
new bootstrap.Model(model).show();

// Reset the form and validation state
form.reset();
form.classList.remove('was-validated');



}); 