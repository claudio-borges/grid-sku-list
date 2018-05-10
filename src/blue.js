import React, { Component } from "react";
import { render } from "react-dom";
import { AppProvider, AppContext } from "./appcontext";
import Green from "./green";

const divBlue = {
  padding: "30px",
  backgroundColor: "blue"
};

const Blue = () => {
  return (
    <div style={divBlue}>
      <AppContext.Consumer>
        {context => <button onClick={context.inc}>INC</button>}
      </AppContext.Consumer>
      <Green />
    </div>
  );
};

export default Blue;
