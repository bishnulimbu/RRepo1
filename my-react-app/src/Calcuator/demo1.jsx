import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [data, setData] = useState("");
  const inputHandler = (e) => {
    setData(e.target.value);
  };

  function numData(num) {
    setData((d) => d + num);
    console.log(data);
  }
  function addFn() {
    try {
      setData(eval(data).toString());
    } catch {
      setData("Error");
    }
  }

  useEffect(() => {});

  return (
    <div className="calculator">
      <input
        type="text"
        value={data}
        className="calculator-input"
        onChange={(e) => inputHandler(e)}
      />
      <br />
      <br />
      <div className="calculator-row">
        <button className="calculator-button">C</button>
        <button className="calculator-button">+/-</button>
        <button className="calculator-button">%</button>
        <button className="calculator-button">/</button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button">7</button>
        <button className="calculator-button">8</button>
        <button className="calculator-button">9</button>
        <button className="calculator-button">*</button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button">4</button>
        <button className="calculator-button">5</button>
        <button className="calculator-button">6</button>
        <button className="calculator-button">-</button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button" onClick={() => numData(1)}>
          1
        </button>
        <button className="calculator-button">2</button>
        <button className="calculator-button">3</button>
        <button className="calculator-button" onClick={() => numData("+")}>
          +
        </button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button">0</button>
        <button className="calculator-button">.</button>
        <button className="calculator-button" onClick={addFn}>
          {/* "=" button shouldn't immediately run the function so passing the reference without invoking it.   */}
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
