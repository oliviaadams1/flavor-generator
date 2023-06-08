import React from "react";
import "./App.css";
import FlavorTest from "./Components/FlavorTest";
import Generate from "./Components/Generate";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <fieldset>
            <legend>
              <h1 className="generator-header"> Flavor Generator</h1>
            </legend>
           <React.StrictMode>
              <FlavorTest />
          </React.StrictMode>
            <React.StrictMode>
              <Generate />
          </React.StrictMode>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default App;
