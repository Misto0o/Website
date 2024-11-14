// Get the form and class selection dropdown
const form = document.querySelector('form');
const classSelection = document.getElementById('class-selection');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get selected class and form data
  const selectedClass = classSelection.value;
  const userName = document.getElementById('name').value;
  const userEmail = document.getElementById('email').value;

  // Simple form validation
  if (!userName || !userEmail) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  // Simulate the payment process (in a real scenario, integrate with a payment API)
  console.log(`Processing payment for ${userName} (${userEmail})`);
  console.log(`Class selected: ${selectedClass}`);

  // Display confirmation message to the user
  alert(`Thank you, ${userName}! You have successfully enrolled in the ${selectedClass} class. Check your email (${userEmail}) for payment details.`);

  // Clear the form
  form.reset();
});
