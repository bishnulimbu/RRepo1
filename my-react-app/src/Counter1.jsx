import React, { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  const fn1 = () => {
    setCount(count + 1);
  };
  const fn2 = () => {
    setCount(0);
  };
  const fn3 = () => {
    setCount(count - 1);
  };

  return (
    <div className="count-main">
      <p>{count}</p>
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
    </div>
  );
}

export default Counter1;
