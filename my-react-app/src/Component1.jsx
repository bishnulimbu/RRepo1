import React, { useState } from "react";

function Component1() {
  const [name, setName] = useState("yourName");
  const [age, setAge] = useState(0);
  const [gay, setGay] = useState(false);
  const fn1 = () => {
    setName("BroCode");
  };
  const fn2 = () => {
    setAge(age + 1);
  };
  const fn3 = () => {
    setGay(!gay);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={fn1}>Click Me!</button>
      <p>{age}</p>
      <button onClick={fn2}>Click Me!</button>
      <p>Are you gay? {gay ? "yes" : "no"}</p>
      <button onClick={fn3}>Click Me!</button>
    </div>
  );
}

export default Component1;
