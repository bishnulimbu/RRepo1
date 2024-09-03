import React, { useState } from "react";

function Component2() {
  const [name, setName] = useState("");
  const [num, setNum] = useState();

  const fn1 = (event) => {
    setName(event.target.value);
  };
  const numFn = (event) => {
    setNum(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={fn1} />
      <p>your name is: {name}</p>

      <input type="number" onChange={numFn} />
      <p>Quantity:{num}</p>
    </div>
  );
}

export default Component2;
