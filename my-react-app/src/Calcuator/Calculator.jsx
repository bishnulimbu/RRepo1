import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  //will need like four state
  const [currentNum, setCurrentNum] = useState("0");
  const [prevNum, setPrevNum] = useState("");
  const [operator, setOperator] = useState();
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState("");

  function viewDisplay(e) {
    setDisplay(e.target.value);
  }

  function handleNumberClick(num) {
    setCurrentNum(currentNum + num);
    setDisplay(currentNum + num);
  }

  function clear() {
    setCurrentNum("0");
    setPrevNum("");
    setOperator(null);
    setResult(null);
  }

  function handleOperatorClick(op) {
    setPrevNum(parseFloat(currentNum)); //setting the number to previous value for operation withe the next value
    setOperator(op);
    setCurrentNum(""); //freeing the current num for next number
    setDisplay(toString(prevNum) + operator);
  }

  function calculate() {
    let current = parseFloat("currentNum");
    let newResult; //temoparay result varaible
    switch (operator) {
      case "+":
        newResult = prevNum + current;
    }
    setResult(newResult);
    currentNum(toString(newResult));
    prevNum("");
    operator(null);
  }

  return (
    <div className="calculator">
      <input
        type="text"
        value={currentNum}
        className="calculator-input"
        readOnly
        onChange={(e) => viewDisplay(e)}
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
