import React from "react";
import Field from "../Field/Field";

function TextArea({
  inputType,
  required,
  counter,
  label,
  message,
  read,
  value,
}) {
  return (
    <Field
      fieldType="text-area"
      label={label}
      inputType=""
      required={required}
      counter={counter}
      message={message}
      read={read}
      value={value}
    />
  );
}

export default TextArea;
