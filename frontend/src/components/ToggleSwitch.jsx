import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>Toggle Switch</h2>
      <span id="l-switch">Label</span>
      <button onClick={() => setIsOn(!isOn)} aria-labelledby="l-switch">{isOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default ToggleSwitch;
