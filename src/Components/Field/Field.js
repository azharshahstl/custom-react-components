import React, { useState, useEffect } from "react";
import "./Field.css";
import Label from "../Label/Label";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DateRangeIcon from "@material-ui/icons/DateRange";

//generic component that TextInput, TextField, and Select use
//used to create a consistent style
function Field({
  fieldType,
  inputType,
  label,
  required,
  message,
  counter,
  read,
  value,
  menuItems,
  getMenuItem,
  getTextInput,
  textInputEntered,
}) {
  const [valueUpdater, setValueUpdater] = useState(0);
  const [inputClass, setInputClass] = useState("text-input");
  const [messageDescription, setMessageDescription] = useState("");
  const [messageClass, setMessageClass] = useState("");
  const [loading, setLoading] = useState(true);
  const [maxLength, setMaxLength] = useState(225);
  const [characterCount, setCharacterCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (fieldType == "text-input") {
      setMaxLength(125);
    }
    if (read) {
      setDisabled(true);
    }
    changeClassStyle();
    setLoading(false);
  }, [valueUpdater]);

  function getItem(event) {
    getMenuItem(event.target.value);
  }

  const textInputEnterPressed = (event) => {
    textInputEntered(event);
  };

  // function getInput(event) {
  //   getTextInput(event.target.value);
  // }

  //depending on fieldType prop, will set the correct class styling for each field
  function changeClassStyle() {
    let localInputClass = inputClass;

    if (fieldType == "text-area") {
      localInputClass = "text-input text-area";
    } else if (fieldType == "select") {
      localInputClass = "text-input select";
    }

    if (read) {
      localInputClass = localInputClass + " disabled";
    }
    console.log("local: " + localInputClass);

    //checks to see if a message prop was passed in
    if (message != "" && !read) {
      changeMessageStyle(localInputClass);
    } else {
      setInputClass(localInputClass);
    }
  }

  //sets the correct classes for colored borders and colored success/error message
  function changeMessageStyle(localInputClass) {
    let messageDescription = message.charAt(0).toUpperCase() + message.slice(1);
    // console.log("message style: " + localInputClass);
    if (message == "success") {
      setInputClass(localInputClass + " success");
      setMessageClass("message success");
      setMessageDescription(messageDescription);
    } else if (message == "error") {
      setInputClass(localInputClass + " error");
      setMessageClass("message error");
      setMessageDescription(messageDescription);
    }
  }

  //calculates character length
  function characterCounter(event) {
    let text = event.target.value;
    // console.log(text);
    // console.log(text.length);
    setCharacterCount(text.length);
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="field-area">
      <Label
        type="field"
        size="small"
        label={label}
        required={required}
        read={read}
      />

      {/*displays a select dropdown or textarea box depending on input*/}
      {fieldType == "select" ? (
        <select onClick={getItem} className={inputClass}>
          {menuItems.map((menuItem) => (
            <option value={menuItem}>{menuItem}</option>
          ))}
        </select>
      ) : (
        <textarea
          // onChange={getInput}
          // onKeyUp={characterCounter}
          onKeyUp={textInputEntered}
          type="password"
          rows="2"
          cols="65"
          placeholder="Text"
          className={inputClass}
          maxLength={maxLength}
          value={value}
          disabled={disabled}
        ></textarea>
      )}

      {/* display date and password icons when 'inputType' is specified */}
      {inputType == "date" && !read ? (
        <p className="input-type-icon">
          <DateRangeIcon />
        </p>
      ) : null}

      {inputType == "password" && !read ? (
        <p className="input-type-icon">
          <VisibilityIcon />
        </p>
      ) : null}

      {/*disaplays counter when enabled */}
      {counter && !read ? (
        <p className="character-count">{characterCount}/225</p>
      ) : null}

      {/*displays success or error message when message is passed in */}
      {message != "" && !read ? (
        <h6 className={messageClass}>{messageDescription} message</h6>
      ) : null}
    </div>
  );
}

export default Field;
