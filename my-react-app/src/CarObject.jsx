import React, { useState } from "react";

function CarObject() {
  const [cars, setCars] = useState([]);
  const [date, setDate] = useState("new date().getFullYear()");
  const [name, setName] = useState("");
  const [model, setModel] = useState("");

  function addCar() {
    const data1 = { date: date, name: name, model: model };
    setCars((c) => [...c, data1]);
    setDate("");
    setName("");
    setModel("");
  }
  function removeCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function fnOne(e) {
    setName(e.target.value);
  }
  function fnTwo(e) {
    setDate(e.target.value);
  }
  function fnThree(e) {
    setModel(e.target.value);
  }

  return (
    <>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((cars, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {cars.date}
            {cars.name}
            {cars.model}
          </li>
        ))}
      </ul>
      <form action="">
        <input
          type="text"
          placeholder="carName"
          value={name}
          onChange={(e) => fnOne(e)}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="date"
          value={date}
          onChange={(e) => fnTwo(e)}
        />

        <br />
        <br />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => fnThree(e)}
        />
        <br />
        <br />
        <button type="" onClick={(e) => addCar(e.preventDefault())}>
          {/* Added e.preventDefault() inside the addCar function to prevent the form from reloading the page. */}
          Submit
        </button>
      </form>
    </>
  );
}

export default CarObject;
