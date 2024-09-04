//to change state var of array
import React, { useState } from "react";
import cross from "./assets/cross.png";

function Array1() {
  const [arr1, setArr1] = useState(["one", "two", "three"]);

  function addFn(e) {
    const text1 = document.getElementById("textBox1").value;
    // const textShow = (e) => e.target.value;
    setArr1((a) => [...a, text1]);
    const text2 = (document.getElementById("textBox1").value = "");
  }
  function removeFn(index) {
    setArr1(arr1.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>To do List</h1>
      <ol>
        {arr1.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFn(index)}>
              <img src={cross} alt="" height="10px" width="10px" />
            </button>
          </li>
        ))}
      </ol>
      <input type="text" id="textBox1" />
      <button onClick={addFn}>Add Tasks</button>
      {/* <button onClick={(e) => setArr1(e.target.value)}>Add In the list</button> */}
      {/* <button onClick={delete}>q</button> */}
      <br />
      {/* <button onClick={removeFn}>Remove Tasks</button> */}
    </>
  );
}

export default Array1;
