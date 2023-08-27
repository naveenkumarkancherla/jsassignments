import React, { useState } from 'react';

export function Calc() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  function handleInput1Change(event) {
    setInput1(event.target.value);
    calculateResult(event.target.value, input2, operator);
  }

  function handleInput2Change(event) {
    setInput2(event.target.value);
    calculateResult(input1, event.target.value, operator);
  }

  function handleOperatorChange(event) {
    setOperator(event.target.value);
    calculateResult(input1, input2, event.target.value);
  }

  function calculateResult(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let calculatedResult;

    switch (operator) {
      case "+":
        calculatedResult = num1 + num2;
        break;
      case "-":
        calculatedResult = num1 - num2;
        break;
      case "*":
        calculatedResult = num1 * num2;
        break;
      case "/":
        calculatedResult = num1 / num2;
        break;
      default:
        break;
    }

    setResult(isNaN(calculatedResult) ? "" : calculatedResult);
  }

  return (
    <div>
      <center>
      <input type="number" value={input1} onChange={handleInput1Change} />
      <select value={operator} onChange={handleOperatorChange}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="number" value={input2} onChange={handleInput2Change} />
      <br />
      <p>Result: {result}</p>
      </center>
    </div>
  );
}
