import React from "react";
import "./Selection.css";

//a generic component used by Checkbox and Radio
//used to create a consistent style
function Selection({ label, selectionType, id, value, disabled, selected }) {
  let inputClass = selectionType;

  return (
    <div className="selection-area">
      <input
        name="name"
        value={value}
        className={selectionType}
        id={id}
        type={selectionType}
        checked={selected}
        disabled={disabled}
      ></input>
      <label className="label" for={selectionType}>
        <p>{label}</p>
      </label>
    </div>
  );
}

export default Selection;
