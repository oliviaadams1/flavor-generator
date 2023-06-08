import React from "react";
import combos from "./Combinations";
import comboList from "./CombinationList";

// This file is used for comparison of combinations and selected flavors and lists the matched combination name/recipe

function Generate() {
  // When generate button is pressed
  const handleClick = (event) => {
    event.preventDefault();
    // set a variable to the id of all flavors that are selected (boxes checked)
    let flav = document.querySelectorAll("input[type=checkbox]:checked");
    var flavArray = Array.from(flav, (node) => node.id);
    let count = 0;
    let match = [];

    // This is the actual comparison between selected flavors and listed combinations
    for (let j = 0; j < combos.length; j++) {
      const result = combos[j].every((val) => flavArray.includes(val));
      if (result === true) {
        count++;
        // length of match array is set to the number of combinations matched 
        match.length = count;
        // push each matched combination to the match array 
        match.push(comboList[j]);
        // console.table(match); --- for me to check what the match array looks like 
        // Printing the possible combinations given selected flavors 
        var output = match.join("<br/><br/>");
        document.querySelector("#generated").innerHTML = output;
      
        if(count > 1){
          document.querySelector("#gen-title").innerHTML = "Suggested Flavor Combinations"
        }
      }
    }
  };

  return (
    <>
    <h2 id="gen-title"></h2>
      <p id="generated"></p>
      <br />
      <button className="gen-btn" onClick={handleClick}>
        Generate
      </button>
    </>
  );
}
export default Generate;
