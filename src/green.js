import React, { Component } from "react";
import { render } from "react-dom";
import { AppProvider, AppContext } from "./appcontext";

const divGreen = {
  padding: "30px",
  backgroundColor: "green"
};

const Green = () => (
  <div style={divGreen}>
    <AppContext.Consumer>{context => context.number}</AppContext.Consumer>
    <AppContext.Consumer>
      {context => <button onClick={context.dec}>DEC</button>}
    </AppContext.Consumer>
  </div>
);

export default Green;
