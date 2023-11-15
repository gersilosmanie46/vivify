/*
Filename: ComplexCode.js
Content: Complex JavaScript code example showcasing various programming concepts and techniques.
*/

// Object constructor for creating a person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create an array of person objects
var people = [
  new Person("John", 25),
  new Person("Alice", 30),
  new Person("Bob", 35)
];

// Function to find the average age of people
function calculateAverageAge(people) {
  var totalAge = 0;
  
  // Iterate through each person and sum their ages
  for (var i = 0; i < people.length; i++) {
    totalAge += people[i].age;
  }
  
  return totalAge / people.length;
}

// Invoke the function to calculate and log the average age
console.log("Average age of people: " + calculateAverageAge(people));

// Function to sort people by name
function sortPeopleByName(people) {
  return people.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

// Invoke the function to sort and log the people by name
console.log("People sorted by name:");
var sortedPeople = sortPeopleByName(people);
for (var i = 0; i < sortedPeople.length; i++) {
  console.log(sortedPeople[i].name);
}

// Function to check if a number is prime
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Invoke the function to check and log prime numbers
console.log("Prime numbers from 1 to 20:");
for (var i = 1; i <= 20; i++) {
  if (isPrimeNumber(i)) {
    console.log(i);
  }
}

// Function to generate Fibonacci series up to a given number of terms
function generateFibonacciSeries(numTerms) {
  var fibSeries = [0, 1];
  
  for (var i = 2; i < numTerms; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  
  return fibSeries;
}

// Invoke the function to generate and log the Fibonacci series
console.log("Fibonacci series:");
var fibonacciSeries = generateFibonacciSeries(10);
console.log(fibonacciSeries);

// Event listener for the 'click' event on a button with the ID 'myButton'
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});

// Code utilizing Promises
new Promise(function(resolve, reject) {
  // Some asynchronous operation
  setTimeout(function() {
    resolve('Operation completed successfully!');
  }, 2000);
}).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.error(error);
});

// Complex regular expression pattern matcher
var pattern = /[0-9a-zA-Z]{5}-[0-9a-zA-Z]{5}/;
var text = "ABcd1-23456";
console.log("Pattern match result: " + pattern.test(text));

// ...

// 200+ lines of additional complex code...