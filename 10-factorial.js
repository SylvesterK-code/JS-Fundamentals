#!/usr/bin/node
// The above line (shebang) tells the system to use Node.js to run this script

// Recursive function to compute factorial
function factorial(n) {
  // Base case: if n is NaN, less than 2 → return 1
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  // Recursive case: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Convert first argument into integer
const num = parseInt(process.argv[2]);

// Print the factorial result
console.log(factorial(num));
