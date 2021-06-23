import React from "react";
import Field from "../Field/Field";

function Select({
  inputType,
  required,
  defaultValue,
  label,
  message,
  menuItems,
  getMenuItem,
}) {
  return (
    <Field
      fieldType="select"
      inputType=""
      defaultValue={defaultValue}
      required={required}
      label={label}
      message={message}
      menuItems={menuItems}
      getMenuItem={getMenuItem}
    />
  );
}

export default Select;
