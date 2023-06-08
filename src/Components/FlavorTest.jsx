import React, { useState } from "react";
import flavors from "./Flavor";

// This file is used to list array flavors with a checkbox and handle check

function Flavor() {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <form>
        <div className="form-group">
          <h2 className="flavor-type">Flavors</h2>
          <div id="flavorForm">
            {flavors.length
              ? flavors.map((flavors) => (
                  <div key={flavors.id}>
                    <div id="flavDiv" className="checkbox">
                      <label>
                        <input
                        type="checkbox"
                        value={flavors}
                        onClick={handleCheck}
                        id={flavors}
                      />
                      {' '}
                      <span id="flav-label">{flavors}</span>
                      </label>
                      <br />
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </form>
    </>
  );
}

export default Flavor;
