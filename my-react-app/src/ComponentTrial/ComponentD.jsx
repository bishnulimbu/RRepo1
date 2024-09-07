import React, { useContext } from "react";
import "./Comp.css";
import { myContext1 } from "./ComponentA";

function ComponentD() {
  const user = useContext(myContext1);
  return (
    <div className="box">
      <h1>component D</h1>
      <h2>Name: {user}</h2>
    </div>
  );
}

export default ComponentD;
