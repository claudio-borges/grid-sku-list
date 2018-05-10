import React, { Component } from "react";
import { render } from "react-dom";
import { AppProvider, AppContext } from "./appcontext";
import Blue from "./blue";

const divRed = {
  padding: "30px",
  backgroundColor: "red"
};

class Red extends Component {
  render() {
    return (
      <AppProvider>
        <div style={divRed}>
          <AppContext.Consumer>{context => context.number}</AppContext.Consumer>
          <Blue />
        </div>
      </AppProvider>
    );
  }
}

export default Red;
