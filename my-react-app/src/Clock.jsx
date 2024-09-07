import React, { useState, useEffect } from "react";
import "./Clock.css"; // Assuming CSS is in a file named Clock.css

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalData = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalData);
    };
  }, []); // Removed dependency on [time] to set the interval only once

  function timeFormat() {
    let hrs = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const meridian = hrs >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; // If hrs is 0, set it to 12

    // Pad minutes and seconds with leading zeros
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;

    return `${hrs}:${formattedMin}:${formattedSec} ${meridian}`;
  }

  return (
    <div className="clock-container">
      <p className="clock-time">{timeFormat()}</p>
    </div>
  );
}

export default Clock;
