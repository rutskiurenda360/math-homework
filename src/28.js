function squareRoot(x) {
  if (x < 0) {
    throw new Error("Cannot compute the square root of a negative number.");
  }
  const result = Math.sqrt(x);
  console.log(`The square root of ${x} is ${result}`);
}

squareRoot(16); // This should log "The square root of 16 is 4.0"
