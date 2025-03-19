// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to guess the number
console.log("Guess a number between 1 and 10");
const userInput = prompt();

// Check if the user's input is equal to the random number
if (userInput == randomNumber) {
  console.log("You guessed it! The number was " + randomNumber);
} else {
  console.log("Sorry, you didn't guess correctly. Try again.");
}
