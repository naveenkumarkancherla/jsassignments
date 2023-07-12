var numbers = [];
var input = parseInt(prompt("Enter a number (enter 0 to finish):"));

while (input != 0) {
  numbers.push(input);
  input = parseInt(prompt("Enter a number (enter 0 to finish):"));
}

console.log("The array of numbers entered by the user:", numbers);
