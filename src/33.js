function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Example usage:

const maxNumber = 10;
console.log(getRandomInt(maxNumber)); // Output: a random number between 0 and maxNumber-1

maxNumber = 20;
console.log(getRandomInt(maxNumber)); // Output: a random number between 0 and 19
