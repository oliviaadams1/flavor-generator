import React from "react";
import "./App.css";
import FlavorTest from "./Components/FlavorTest";
import Generate from "./Components/Generate";
import Automation from "./Components/Automation";
//import MilkType from "./Components/MilkType";
import Toggle from "./Components/Toggle";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <fieldset>
            <legend>
              <React.StrictMode>
                <Automation />
            </React.StrictMode>
              <h1 className="generator-header"> Flavor Generator</h1>
            </legend>
           <React.StrictMode>
              <FlavorTest /> 
              <Toggle />
              <Generate />
          </React.StrictMode>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default App;
