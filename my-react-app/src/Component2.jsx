import React, { useState } from "react";

function Component2() {
  const [name, setName] = useState("");
  const [num, setNum] = useState();
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [payment, setPayment] = useState("");

  const fn1 = (event) => {
    setName(event.target.value);
  };
  const numFn = (event) => {
    setNum(event.target.value);
  };
  const areaFn = (event) => {
    setArea(event.target.value);
  };
  const dnFn = (event) => {
    setCity(event.target.value);
  };
  const radioFn = (event) => {
    setPayment(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={fn1} />
      <p>your name is: {name}</p>

      <input type="number" onChange={numFn} />
      <p>Quantity:{num}</p>

      <input type="textarea" onChange={areaFn} placeholder="write something" />
      <p>Your Comment:{area}</p>

      <br />
      <br />
      <select onChange={dnFn}>
        <option value="">City</option>
        <option value="kathmandu">kathmandu</option>
        <option value="kerabari">kerabari</option>
        <option value="biratnagar">biratnagar</option>
      </select>
      <p>City:{city}</p>

      <label>
        <input
          type="radio"
          value="one"
          checked={payment === "one"}
          onChange={radioFn}
        />
        One
      </label>
      <label>
        <input
          type="radio"
          value="two"
          checked={payment === "two"}
          onChange={radioFn}
        />
        Two
      </label>
      <p>Payment:{payment}</p>
    </div>
  );
}

export default Component2;
