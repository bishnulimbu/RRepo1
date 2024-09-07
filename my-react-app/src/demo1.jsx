import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalData = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalData);
    };
  }, []);

  function timeFormat() {
    let hrs = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const meridian = hrs >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; // If hour is 0, display as 12

    // Pad minutes and seconds with leading zeros if they are less than 10
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;

    return `${hrs}:${formattedMin}:${formattedSec} ${meridian}`;
  }

  return <>{timeFormat()}</>;
}

export default Clock;
