#!/usr/bin/node
// The above line (shebang) tells the system to use Node.js to run this script

// Get the first argument passed to the script and try to convert it to an integer
const num = parseInt(process.argv[2]);

// Check if the conversion failed (NaN = Not a Number)
if (isNaN(num)) {
  // If it’s not a number, print this message
  console.log("Not a number");
} else {
  // If it’s a valid integer, print the number with the required format
  console.log("My number: " + num);
}
