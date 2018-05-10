import React, { Component } from "react";
import { render } from "react-dom";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({ number: this.state.number + 1 });
    },
    dec: () => {
      if (this.state.number > 0) {
        this.setState({ number: this.state.number - 1 });
      }
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppContext };
