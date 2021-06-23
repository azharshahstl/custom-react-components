import React, { useState, useEffect } from "react";
import "./Button.css";
import Label from "../Label/Label";

//applies appropriate size and enabled/disabled style to buttons
function LargeButton({ filled, type, size, label }) {
  let largeStyle = "button enabled-large";
  if (type == "disabled") {
    largeStyle = "button disabled-large";
  }
  return (
    <button className={largeStyle}>
      <Label type="button" size="small" label={label} />
    </button>
  );
}

function SmallButton({ filled, type, size, label }) {
  let smallStyle = "button enabled-small";
  if (type == "disabled") {
    smallStyle = "button disabled-small";
  }
  return (
    <button className={smallStyle}>
      <Label type="button" size="small" label={label} />
    </button>
  );
}

//acts as a size filter
function Button({ filled, type, size, label }) {
  // console.log(size);

  //if size is specified, return component for that size
  //if no size is specified, return SmallButton as the default button
  return size == "small" ? (
    <SmallButton type={type} size={size} label={label} />
  ) : size == "large" ? (
    <LargeButton type={type} size={size} label={label} />
  ) : (
    <SmallButton type={type} size={size} label={label} />
  );
}

export default Button;
