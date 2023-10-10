import React, { useState } from "react";

// This component toggles between showing and hiding the milk options from users
const Toggle = () => {
  // create list of milk options
  const milkType = [
    "Almond",
    "Half & Half",
    "Heavy Cream",
    "Oat",
    "Skim",
    "Soy",
    "2%",
    "Whole",
    "None",
  ];

  // create constant checked for button and set initial value to false
  const [checked, setChecked] = useState(false);

  // create a constant to handle button click
  const handleCheck = () => {
    // set the state of checked to the opposite of the current state of checked
    setChecked(!checked);
  };

  // log the current state of checked
  console.log(checked);

  // if the button has been pressed, map through and list the array of milk options
  // render a button labeled hide milk options that on click, sets checked to false
  if (checked) {
    return (
      <div className="form-group" id="milktype">
        <h3 className="milk-type">Milk Type</h3>
        {milkType.length
          ? milkType.map((milkType) => (
              <div className="milk">
                <label className="milk">{milkType}</label>
                <br />
              </div>
            ))
          : null}
        <button type="button" onClick={handleCheck}>
          Hide Milk Options
        </button>
      </div>
    );
  }
  // if checked is set to false, render a button labeled show milk options
  // that on click sets checked to true
  else {
    return (
      <div className="form-group" id="milktype">
        <button type="button" onClick={handleCheck}>
          Show Milk Options
        </button>
      </div>
    );
  }
};
export default Toggle;
