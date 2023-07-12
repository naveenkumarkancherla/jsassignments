const userInput = parseInt(prompt('Enter a number:'));
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

if (isPrime(userInput)) {
  console.log('The number is prime.');
} else {
  console.log('The number is not prime.');
}
