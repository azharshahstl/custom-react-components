import { type } from "language-tags";
import "./Form.css";
import React, { useState, useEffect } from "react";
import Button from "../Components/Button/Button";
import Label from "../Components/Label/Label";
import TextInput from "../Components/TextInput/TextInput";
import TextArea from "../Components/TextArea/TextArea";
import Select from "../Components/Select/Select";
import Checkbox from "../Components/Checkbox/Checkbox";
import Radio from "../Components/Radio/Radio";
import Switch from "../Components/Switch/Switch";
import { data } from "jquery";
// import axios from "axios";

function Form(props) {
  const [switchToggled, setSwitchToggled] = useState(false);
  //gets passed to TextInput, TextArea, and Select.
  //when message = "success", displays success message
  //when message = "error", displays error message
  //when message = "", displays nothing
  const [message, setMessage] = useState("");

  //you can use this to store the Select menu item
  const [menuItem, setMenuItem] = useState("");
  const [userName, setUserName] = useState("");

  //my Select component takes in an array or strings
  //these strings are displayed in a drop down menu
  //play around with the values to make sure they properly get displayed
  let menuItems = ["Google"];

  //gets menu item that a user selects from Select component
  function getMenuItem(menuItems) {
    console.log("in getmenuitem", menuItems);
    // setMenuItem(item);
  }

  const textInputEntered = (event) => {
    console.log("inside text input entered", event.target.value, event.keyCode);
    if (event.keyCode === 13) {
      fetchGithubName(event.target.value);
    }
  };

  //You can put this function on an onChange or onKeyUp event
  //attach it to a div that wraps a TextInput
  function getTextInput(event) {
    // console.log(event);
    // setUserName(event.target.value);
  }

  //toggles switch component
  //displays "What is your street address?" if switchToggled is true
  function switchOn() {
    setSwitchToggled(!switchToggled);
  }

  const fetchGithubName = (githubName) => {
    console.log(githubName);
    fetch(`https://api.github.com/users/${githubName}`)
      .then((response) => response.json())
      .then((foundNameObject) => {
        if (foundNameObject) {
          fetch(`https://api.github.com/users/${foundNameObject.login}/repos`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              const urls = data.map((d) => d.html_url);
              menuItems.push(...urls);
              console.log("menuItems", menuItems);
            });
        }
      });
  };

  return (
    <div className="form-wrapper">
      <h1>GitHub Repo Selector Form</h1>

      <form className="form">
        <div className="question" onChange={getTextInput}>
          <TextInput
            // inputType="date"
            label="GitHub Username"
            required={false}
            message={message}
            read={false}
            getTextInput={getTextInput}
            textInputEntered={textInputEntered}
            // value="some sentence okay"
          />
        </div>
        <div style={{ height: "7rem" }} className="spacer"></div>
        <div className="question">
          <Select
            defaultValue=""
            required=""
            label="Label"
            message={message}
            // required={true}
            menuItems={menuItems}
            getMenuItem={getMenuItem}
          />
        </div>
        <div style={{ height: "7rem" }} className="spacer"></div>
        <div className="question">
          <Button type="enabled" size="small" label="Submit" />
        </div>
        {/* <div className="question">
          <Label type="field" size="small" label="Do you live in the US?" />
          <div className="switch">
            <Switch
              switchOn={switchOn}
              // disabled={true} selected={true}
            />
          </div>
        </div> */}

        {/* feel free to uncomment any of the props for TextInput, Radio, CheckBox, Switch,
        Button, TextArea and Select components to see what they do */}
        {/* {switchToggled ? (
          <div className="question">
            <TextInput
              // inputType="date"
              label="What is the your street address?"
              required={false}
              message={message}
              read={false}
              // value="some sentence okay"
              getTextInput={getTextInput}
            />
          </div>
        ) : null} */}

        <div style={{ height: "5rem" }} className="spacer"></div>
        {/* <div className="question">
          <Label
            type="field"
            size="small"
            label="What is 2+2?"
            required={true}
          />
          <Radio
            label="1"
            id="1"
            value={1}
            //  disabled={true} selected={true}
          />
          <Radio label="2" id="2" value={2} />
          <Radio label="3" id="3" value={3} />
          <Radio label="4" id="4" value={4} />
          <Radio label="5" id="5" value={5} />
        </div> */}

        {/* <div className="question">
          <Label
            type="field"
            size="small"
            label="Which are your favorite ice cream flavors?"
          />
          <Checkbox
            label="Chocolate"
            value="chocolate"
            // disabled={true}
            // selected={true}
          />
          <Checkbox label="Vanilla" value="vanilla" />
          <Checkbox label="Strawberry" value="strawberry" />
          <div style={{ height: "7rem" }} className="spacer"></div>

          <Button type="enabled" size="small" label="Submit" />
        </div> */}
      </form>

      {/* <Button type="disabled" size="large" label="Disabled" /> */}

      {/* <TextArea
        inputType=""
        label="Label"
        required={true}
        counter={true}
        read={true}
        message="error"
        value="Some sentence okay  Some sentence okay  Some sentence okay  Some sentence okay"
      /> */}
    </div>
  );
}

export default Form;
