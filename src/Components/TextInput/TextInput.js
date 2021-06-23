import React, { useEffect, useState } from "react";
import Label from "../Label/Label";
import Field from "../Field/Field";

function TextInput({
  inputType,
  label,
  required,
  message,
  read,
  value,
  getTextInput,
}) {
  return (
    <Field
      fieldType="text-input"
      inputType={inputType}
      label={label}
      required={required}
      message={message}
      read={read}
      value={value}
      getTextInput={getTextInput}
    />
  );
}

export default TextInput;
