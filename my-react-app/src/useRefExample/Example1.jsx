import React from "react";
import { useState, useEffect, useRef } from "react";

const Example1 = () => {
  const refOne = useRef(0);
  const refTwo = useRef(0);
  const refThree = useRef(0);

  useEffect(() => {
    console.log("rendered times.");
  });
  //will not render even when the button is clicked.

  function handleClickOne() {
    // refOne.current++;
    // console.log(refOne.current);
    // refOne.current.focus();
    refOne.current.style.backgroundColor = "yellow";
    refTwo.current.style.backgroundColor = "";
    refThree.current.style.backgroundColor = "";
  }
  function handleClickTwo() {
    // refOne.current++;
    // console.log(refOne.current);
    refOne.current.focus();
    refOne.current.style.backgroundColor = "";
    refTwo.current.style.backgroundColor = "yellow";
    refThree.current.style.backgroundColor = "";
  }
  function handleClickThree() {
    // refOne.current++;
    // console.log(refOne.current);
    refOne.current.focus();
    refOne.current.style.backgroundColor = "";
    refTwo.current.style.backgroundColor = "";
    refThree.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClickOne}>Click me1</button>
      <br />
      <input type="text" ref={refOne} />
      <br />
      <button onClick={handleClickTwo}>Click me2</button>
      <br />
      <input type="text" ref={refTwo} />
      <br />
      <button onClick={handleClickThree}>Click me3</button>
      <br />
      <input type="text" ref={refThree} />
    </div>
  );
};

export default Example1;

//useRef example as useRef doesn't re-render the component if component has any change
