#!/usr/bin/node
// The above line (shebang) tells the system to use Node.js to run this script

// Convert the first argument into an integer
const size = parseInt(process.argv[2]);

// Check if conversion failed (NaN) → print error message
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Loop to print each row of the square
  for (let i = 0; i < size; i++) {
    // "X".repeat(size) creates a string with 'X' repeated 'size' times
    console.log("X".repeat(size));
  }
}
