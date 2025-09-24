#!/usr/bin/node   0n use for unix or macOS

const argsCount = process.argv.length - 2;

if (argsCount === 0) {
  console.log("No argument");
} else if (argsCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
