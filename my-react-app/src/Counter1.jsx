import React, { useState, useEffect } from "react";

function Counter1() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    document.title = `${count} and ${color}`;
  }, [count, color]);

  const fn1 = () => {
    // setCount(count + 1);
    setCount((c) => c + 1);
    // setCount((c) => c + 1);
    // setCount((c) => c + 1);
    //updater function in react
  };
  const fn2 = () => {
    setCount(0);
  };
  const fn3 = () => {
    // setCount(count - 1);
    setCount((c) => c - 1);
    // setCount((c) => c - 1);
    // setCount((c) => c - 1);
  };

  function toggleColor() {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }

  return (
    <div className="count-main">
      <p>
        {count} and {color}
      </p>
      <div className="gap">
        {" "}
        <button className="" onClick={fn3}>
          decrease
        </button>
        <button className="" onClick={fn2}>
          reset
        </button>
        <button className="" onClick={fn1}>
          increase
        </button>
      </div>
      <button className="" onClick={toggleColor}>
        toggleColor
      </button>
    </div>
  );
}

export default Counter1;
