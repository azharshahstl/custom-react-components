import React, { useState } from "react";
import "./Switch.css";

function Switch({ switchOn, disabled, selected }) {
  const [switchState, setSwitchState] = useState(false);

  function switchToggle() {
    switchOn();
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        onClick={switchToggle}
        disabled={disabled}
        checked={selected}
      ></input>
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;
