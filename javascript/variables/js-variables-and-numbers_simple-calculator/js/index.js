console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const addOperands = operand1 + operand2;
  console.log(addOperands);
});

subtractButton.addEventListener("click", () => {
  const substractOperands = operand1 - operand2;
  console.log(substractOperands);
});

multiplyButton.addEventListener("click", () => {
  const multiplyOperands = operand1 * operand2;
  console.log(multiplyOperands);
});

divideButton.addEventListener("click", () => {
  const divideOperands = operand1 / operand2;
  console.log(divideOperands);
});

exponentButton.addEventListener("click", () => {
  const exponentOperands = operand1 ** operand2;
  console.log(exponentOperands);
});

moduloButton.addEventListener("click", () => {
  const moduloOperands = operand1 % operand2;
  console.log(moduloOperands);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1++;
  console.log(operand1);
});

increaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log(operand1);
});

decreaseByOneButton.addEventListener("click", () => {
  operand1--;
  console.log(operand1);
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 - 5;
  console.log(operand1);
});

multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log(operand1);
});

divideByTwoButton.addEventListener("click", () => {
  operand1 = operand1 / 2;
  console.log(operand1);
});
