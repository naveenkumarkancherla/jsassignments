function factorial(n) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
      numbers.push(i);
    }
    var result = numbers.reduce((acc, current) => acc * current, 1);
    return result;
  }
  
  var num = 6;
  var factorialResult = factorial(num);
  console.log("Factorial of " + num + " is: " + factorialResult);
  