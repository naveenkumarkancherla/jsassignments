const randomNumber = Math.floor(Math.random() * 10) + 1;

let guesses = 5;
let hasWon = false;
while (guesses > 0) {
  const userGuess = prompt("Guess a number between 1 and 10:");
  if (userGuess === randomNumber) {
    hasWon = true;
    break;
  }
  guesses--;
}
if (hasWon) {
  console.log('You win!!');
  alert("You won!")
} else {
  console.log('Better luck next time');

  alert("Your random number is "+randomNumber+"\n Better luck next time");
}
