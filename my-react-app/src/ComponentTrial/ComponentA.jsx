import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB.jsx";
import "./Comp.css";

export const myContext1 = createContext();

function ComponentA() {
  const [user, setUser] = useState("Bishnu");

  return (
    <>
      <div className="box">
        <h1>component A</h1>
        <h2>{`Name : ${user}`}</h2>
        <myContext1.Provider value={user}>
          <ComponentB user={user} />
        </myContext1.Provider>
      </div>
    </>
  );
}

export default ComponentA;
