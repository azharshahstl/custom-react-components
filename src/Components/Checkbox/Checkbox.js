import React from "react";
import Selection from "../Selection/Selection";

function Checkbox({ label, value, disabled, selected }) {
  return (
    <Selection
      label={label}
      selectionType="checkbox"
      value={value}
      disabled={disabled}
      selected={selected}
    />
  );
}

export default Checkbox;
