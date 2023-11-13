/*
  Filename: SophisticatedCode.js
  Description: A complex and elaborate code with multiple functionalities.
  Author: [Your Name]
  Date: [Current Date]
*/

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Class representing a student
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method to promote a student to the next grade
  promoteNextGrade() {
    this.grade++;
  }
}

// Array of students
const students = [
  new Student("John", 18, 12),
  new Student("Jane", 17, 11),
  new Student("Mark", 16, 10),
];

// Function to calculate the average grade of students
function calculateAverageGrade(students) {
  let totalGrade = 0;

  for (let i = 0; i < students.length; i++) {
    totalGrade += students[i].grade;
  }

  return totalGrade / students.length;
}

// Utility function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to find the maximum element in an array
function findMaxElement(array) {
  let maxElement = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
}

// Function to generate a random password
function generateRandomPassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

// Example usage of the functions and classes above

console.log(factorial(5)); // Output: 120

console.log(isPalindrome("racecar")); // Output: true

console.log(celsiusToFahrenheit(25)); // Output: 77

console.log(isPrime(23)); // Output: true

console.log(students[0].name); // Output: John

students[0].promoteNextGrade();
console.log(students[0].grade); // Output: 13

console.log(calculateAverageGrade(students)); // Output: 11

console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10

console.log(findMaxElement([5, 10, 3, 8, 2])); // Output: 10

console.log(generateRandomPassword(8)); // Output: Random password of length 8