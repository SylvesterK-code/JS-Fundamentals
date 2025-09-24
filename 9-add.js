#!/usr/bin/node
// The above line (shebang) tells the system to use Node.js to run this script

// Define the function add(a, b) that returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Convert the first and second arguments into integers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Print the result of the addition
console.log(add(num1, num2));
