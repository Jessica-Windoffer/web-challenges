console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  // Exercise 1: Log the entire data object
  const response = await fetch(url);
  console.log(response);

  // Exercise 2: Log different values of the data object
  // Convert response to JSON format
  const data = await response.json();
  // Log the count property of the data object
  console.log(data.count);

  // Log the results array within the data object
  console.log(data.results);

  // Log the first item in the results array
  console.log(data.results[0]);

  // Exercise 3 (Bonus): Can you log the eye color of R2-D2?
  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  console.log(r2d2.eye_color);
  //console.log(data.results[2].eye_color);
}

fetchData();
