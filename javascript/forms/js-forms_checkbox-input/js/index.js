console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
// Reference for the Bonus to the success message-div
const successMessage = document.querySelector('[data-js="success"]');

// Function to hide the error message
function hideTosError() {
  tosError.setAttribute("hidden", "");
}

// Function to show the error message
function showTosError() {
  tosError.removeAttribute("hidden");
}

// Function to hide the success message
function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

// Function to show the success message
function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

// Hide error message and success message initially
hideTosError();
hideSuccessMessage();

// Event listener for checkbox change
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if TOS checkbox is checked before submitting
  if (!tosCheckbox.checked) {
    showTosError();
    return; // Prevent further execution
  }

  // eslint-disable-next-line no-alert
  alert("Form submitted");

  // Show success message if submission was valid
  showSuccessMessage();
});
