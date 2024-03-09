console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

/*let bookTitle = "";
let author = "";
let rating = "";
let numberOfSales = "";*/

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

/*console.log((bookTitle = "The Lord of the Javascript"));
console.log((author = "Mario"));
console.log((rating = 4.2));
console.log((numberOfSales = 120));

numberOfSales++;
console.log(numberOfSales);

rating = rating + 0.3;
console.log(rating);*/

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData(bookTitle, author, rating, numberOfSales) {
  let bookTitle = "The Lord of the Javascript";
  let author = "Mario";
  let rating = 4.2;
  let numberOfSales = 120;
  console.log(bookTitle, author, rating, numberOfSales);
  return bookTitle, author, rating, numberOfSales;
}

logBookData();

numberOfSales++;

logBookData();

numberOfSales++;

logBookData();
