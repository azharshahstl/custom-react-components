import React from "react";
import Selection from "../Selection/Selection";

function Radio({ label, id, value, disabled, selected }) {
  return (
    <Selection
      label={label}
      selectionType="radio"
      id={id}
      value={value}
      disabled={disabled}
      selected={selected}
    />
  );
}

export default Radio;
