import React, { useState } from "react";

function Component2() {
  const [name, setName] = useState("");
  const fn1 = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={fn1} />
      <p>your name is: {name}</p>
    </div>
  );
}

export default Component2;
