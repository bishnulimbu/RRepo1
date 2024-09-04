//to change state var of array
import React, { useState } from "react";

function Array1() {
  const [arr1, setArr1] = useState([]);

  function addFn(e) {
    const text1 = document.getElementById("textBox1").value;
    // const textShow = (e) => e.target.value;
    setArr1([...arr1, text1]);
    const text2 = (document.getElementById("textBox1").value = "");
  }

  return (
    <>
      <h1>To do List</h1>
      <ol>
        {arr1.map((item, index) => (
          <li key={index}>
            {item}

            <button>{index}</button>
          </li>
        ))}
      </ol>
      <input type="text" id="textBox1" />
      <button onClick={addFn}>Add Tasks</button>
      {/* <button onClick={(e) => setArr1(e.target.value)}>Add In the list</button> */}
      {/* <button onClick={delete}>q</button> */}
    </>
  );
}

export default Array1;
