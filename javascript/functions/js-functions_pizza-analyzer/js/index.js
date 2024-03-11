console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.calculatedValue;
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.calculatedValue;
});

// Task 1
function calculatePizzaGain(diameter1, diameter2) {
  area1 = (diameter1 / 2) ** 2 * Math.PI;
  area2 = (diameter2 / 2) ** 2 * Math.PI;
  calculatedValue = ((area2 - area1) / area1) * 100;
  let textContent = Math.round(calculatedValue);
  console.log(textContent);
}

calculatePizzaGain(pizzaSize1, pizzaSize2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
