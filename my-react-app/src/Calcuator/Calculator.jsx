import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  // State declarations
  const [currentNum, setCurrentNum] = useState("0");
  const [prevNum, setPrevNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [display, setDisplay] = useState("0"); // Use display for showing numbers and operations

  function handleNumberClick(num) {
    // Handle the case where currentNum is "0" or needs to concatenate
    if (currentNum === "0" && num !== ".") {
      setCurrentNum(num);
      setDisplay(num);
    } else {
      setCurrentNum((prev) => prev + num);
      setDisplay((prev) => prev + num);
    }
  }

  function clear() {
    setCurrentNum("0");
    setPrevNum("");
    setOperator(null);
    setDisplay("0");
  }

  function handleOperatorClick(op) {
    // Perform any pending calculations before setting a new operator
    if (prevNum && operator && currentNum) {
      calculate();
    } else {
      setPrevNum(parseFloat(currentNum)); // Set the previous number from current input
    }
    setOperator(op);
    setCurrentNum(""); // Clear current input for the next number
    setDisplay((prev) => prev + " " + op + " "); // Show the operation in the display
  }

  function calculate() {
    if (!operator || !currentNum) return; // Ensure there's something to calculate

    const current = parseFloat(currentNum);
    let newResult;

    switch (operator) {
      case "+":
        newResult = prevNum + current;
        break;
      case "-":
        newResult = prevNum - current;
        break;
      case "*":
        newResult = prevNum * current;
        break;
      case "/":
        newResult = prevNum / current;
        break;
      default:
        return;
    }

    setPrevNum(newResult); // Store the result as the new previous number
    setCurrentNum(newResult.toString()); // Update current number with the result
    setOperator(null); // Clear the operator
    setDisplay(newResult.toString()); // Display the result
  }

  return (
    <div className="calculator">
      <input
        type="text"
        value={display}
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
        <button className="calculator-button" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
