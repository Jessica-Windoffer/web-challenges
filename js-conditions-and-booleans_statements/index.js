console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

console.log("Access denied!");

// Part 2: Even / Odd
const number = 6;
if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10000000000;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement =
  currentHour < 17
    ? console.log("Still need to learn...")
    : console.log("Partytime!!!");

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const name = "Andrea";

const greeting = userName === name ? "Hello Coach!" : "Hello " + userName + "!";

console.log(greeting);
