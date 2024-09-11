import React from "react";
import { useState, useEffect, useRef } from "react";

const Example1 = () => {
  const refOne = useRef(0);

  useEffect(() => {
    console.log("rendered times.");
  });
  //will not render even when the button is clicked.

  function handleClick() {
    refOne.current++;
    console.log(refOne.current);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me1</button>
      <br />
      <input type="text" />
      <br />
      <button>Click me2</button>
      <br />
      <input type="text" />
      <br />
      <button>Click me3</button>
      <br />
      <input type="text" />
    </div>
  );
};

export default Example1;

//useRef example as useRef doesn't re-render the component if component has any change
