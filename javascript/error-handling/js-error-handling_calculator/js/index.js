console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorPaasage = document.querySelector('[data-js="error"]');

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

  try {
    const result = operations[operation](firstNumber, secondNumber);
    output.innerText = result;
    console.log(`${firstNumber} ${operation} ${secondNumber} equals ${result}`);
    errorPaasage.innerText = "";
  } catch (error) {
    output.innerText = ""; // Clear output in case of error
    console.error("An error occurred:", error.message);
    errorPaasage.innerText = "Error: " + error.message;
  }
});
