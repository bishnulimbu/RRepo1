import React, { createContext, useState } from "react";
import "./Comp.css";
import ComponentC from "./ComponentC.jsx";

function ComponentB(props) {
  return (
    <div className="box">
      <h1>component B</h1>
      <h2>Name : {props.user}</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
