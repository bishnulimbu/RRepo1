import react, { useState } from "react";

function Person() {
  const [person, setPerson] = useState(
    { name: "ram" },
    { age: 18 },
    { gender: "male" },
  );
  function nameFn(event) {
    setPerson((p) => ({ ...p, name: event.target.value }));
  }
  function ageFn(event) {
    setPerson((p) => ({ ...p, age: event.target.value }));
  }
  function genderFn(event) {
    setPerson((p) => ({ ...p, gender: event.target.value }));
  }

  return (
    <>
      <p>
        My name is: {person.name}, of age: {person.age} and of gender:{" "}
        {person.gender}
      </p>
      <form action="">
        {" "}
        <input type="text" placeholder="name" onChange={nameFn} />
        <input type="number" placeholder="age" onChange={ageFn} />
        <input type="text" placeholder="gender" onChange={genderFn} />
        <button>submit</button>
      </form>
    </>
  );
}

export default Person;
