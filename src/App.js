import React from "react";

import Cards from "./components/Cards/Cards";
import MiniCards from "./components/MiniCards/MiniCards";
import Switch from "./components/Toggle/Switch";

import "./scss/style.scss";
document.querySelector("body").setAttribute("class", "dark-schema");

function App() {
  return (
    <div className="container">
      <div className="header">
        <div>
          <h1> Social Media Dashboard</h1>
          <h5>Total Folowers: 23,004</h5>
        </div>
        <hr />
        <Switch />
      </div>
      <div>
        <Cards />
      </div>
      <div className="header">
        <h1> Overview - Today</h1>
      </div>
      <div>
        <MiniCards />
      </div>
    </div>
  );
}

export default App;
