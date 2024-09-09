import React, { useState } from "react";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState(""); // Current number being typed
  const [previousInput, setPreviousInput] = useState(null); // Previous number
  const [operator, setOperator] = useState(null); // Current operator
  const [result, setResult] = useState(null); // Calculation result

  // Handle number input
  const handleNumberClick = (num) => {
    setCurrentInput((prev) => prev + num); // Append the clicked number to the current input
  };

  // Handle operator input
  const handleOperatorClick = (op) => {
    if (currentInput) {
      setPreviousInput(parseFloat(currentInput)); // Save the current number as the previous input
      setCurrentInput(""); // Reset current input for the next number
      setOperator(op); // Set the clicked operator
    }
  };

  // Perform the calculation
  const calculateResult = () => {
    if (previousInput !== null && currentInput !== "") {
      const current = parseFloat(currentInput);
      let newResult;

      switch (operator) {
        case "+":
          newResult = previousInput + current;
          break;
        case "-":
          newResult = previousInput - current;
          break;
        case "*":
          newResult = previousInput * current;
          break;
        case "/":
          newResult = current !== 0 ? previousInput / current : "Error"; // Handle divide by zero
          break;
        default:
          return;
      }

      setResult(newResult); // Update result
      setCurrentInput(newResult.toString()); // Display result as the current input
      setPreviousInput(null); // Clear previous input
      setOperator(null); // Clear operator
    }
  };

  // Clear input
  const clear = () => {
    setCurrentInput("");
    setPreviousInput(null);
    setOperator(null);
    setResult(null);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={currentInput}
        className="calculator-input"
        readOnly
      />
      <br />
      <br />
      <div className="calculator-row">
        <button className="calculator-button" onClick={clear}>
          C
        </button>
        <button
          className="calculator-button"
          onClick={() => handleOperatorClick("+/-")}
        >
          +/-
        </button>
        <button
          className="calculator-button"
          onClick={() => handleOperatorClick("%")}
        >
          %
        </button>
        <button
          className="calculator-button"
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          className="calculator-button"
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          className="calculator-button"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          className="calculator-button"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button
          className="calculator-button"
          onClick={() => handleNumberClick(".")}
        >
          .
        </button>
        <button className="calculator-button" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
