import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState(0);
  const inputHandler = (e) => {
    setData(e.target.value);
  };
  console.log(data);
  const addFn = () => {};

  return (
    <>
      <input type="number" onChange={(e) => inputHandler(e)} />
      <br />
      <br />
      <button>C</button>
      <button>+/-</button>
      <button>%</button>
      <button>/</button>
      <br />
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <br />
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <br />
      <button
        onClick={() => {
          return 1;
        }}
      >
        1
      </button>
      <button>2</button>
      <button>3</button>
      <button onClick={addFn}>+</button>
      <br />
      <button>0</button>
      <button>.</button>
      <button>=</button>
    </>
  );
};
export default Calculator;
