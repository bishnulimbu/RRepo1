import React, { useState } from "react";

function Component2() {
  const [name, setName] = useState("");
  const [num, setNum] = useState();
  const [area, setArea] = useState("");

  const fn1 = (event) => {
    setName(event.target.value);
  };
  const numFn = (event) => {
    setNum(event.target.value);
  };
  const areaFn = (event) => {
    setArea(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={fn1} />
      <p>your name is: {name}</p>

      <input type="number" onChange={numFn} />
      <p>Quantity:{num}</p>

      <input type="textarea" onChange={areaFn} placeholder="write something" />
    </div>
  );
}

export default Component2;
