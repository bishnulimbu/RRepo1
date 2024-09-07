import React, { createContext, useState } from "react";
import "./Comp.css";
import ComponentD from "./ComponentD.jsx";

function ComponentC() {
  return (
    <div className="box">
      <h1>component C</h1>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
