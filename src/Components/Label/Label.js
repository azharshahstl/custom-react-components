import React from "react";
import "./Label.css";

function SmallLabel({ size, label, type, required, read }) {
  let smallLabelStyle = "label labelSmall";
  // console.log(type);
  if (type == "field") {
    // console.log('is field');
    // console.log(type);
    smallLabelStyle = "label labelSmall field";
  }
  return (
    <p className={smallLabelStyle}>
      {label} {required === true ? <p className="asterisk">*</p> : null}
    </p>
  );
}

function LargeLabel(size, label, type) {
  let largeLabelStyle = "label labelLarge";
  if (type == "field") {
    largeLabelStyle = "label labelLarge field";
  }
  return <p className={largeLabelStyle}>{label}</p>;
}

function Label({ size, label, type, required }) {
  return size == "small" ? (
    <SmallLabel size={size} label={label} type={type} required={required} />
  ) : size == "large" ? (
    <LargeLabel size={size} label={label} />
  ) : (
    <SmallLabel size={size} label={label} />
  );
}

export default Label;
