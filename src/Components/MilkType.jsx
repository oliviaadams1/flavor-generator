import React, { useState } from "react";

// & Future Additions -- milk type, caffeine/decaf, coffee, tea, smoothie

const MilkType = () => {
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
  const [milk, setMilk] = useState(false);

  return (
    <>
      <div className="form-group">
        <h3 className="milk-type">Milk Type</h3>
        {milkType.length
          ? milkType.map((milkType) => (
              <div className="milk">
                <label className="milk">
                  <input
                    checked={milk}
                    onChange={(event) => setMilk(event.target.checked)}
                    type="radio"
                    id={milkType}
                    name="milk"
                  />
                  {milkType}
                </label>
                <br />
              </div>
            ))
          : null}
      </div>
    </>
  );
};
export default MilkType;

{
  /* 
            -- Future additions--
            heart/like a flavor combination 
            suggest new flavors or combinations 

            <div className="generate">
              
              <button className="gen-btn">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <br />
           
            <br />
            <div className="form-group">
              <label htmlFor="suggestion">
                <h3>Suggest More Flavors</h3>
              </label>
              <input
                type="text"
                id="suggestion"
                name="suggestion"
                autoComplete="off"
                placeholder="Give us feedback!"
              />
            </div> */
}
