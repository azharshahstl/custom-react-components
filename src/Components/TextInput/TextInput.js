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
  textInputEntered,
  menuItems,
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
      textInputEntered={textInputEntered}
      menuItems={menuItems}
    />
  );
}

export default TextInput;
