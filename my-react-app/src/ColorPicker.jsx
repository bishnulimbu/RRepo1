import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-main">
      <h1>Color</h1>
      <p style={{ backgroundColor: color }}>Select a color: {color}</p>
      <input type="color" onChange={handleColor} />
    </div>
  );
}

export default ColorPicker;
