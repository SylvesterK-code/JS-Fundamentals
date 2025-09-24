#!/usr/bin/node
// The above line (shebang) tells the system to use Node.js to run this script

// Convert the first argument into an integer
const x = parseInt(process.argv[2]);

// Check if conversion failed (NaN) → print error message
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Loop x times and print "C is fun" each time
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
