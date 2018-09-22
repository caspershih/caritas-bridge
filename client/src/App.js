import React, { Component } from 'react';
import Main from "./pages/Main";
import './App.css';
import Registration from "./components/Registration";
import NonProfit from "./components/NonProfit";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NonProfit /> */}
        <Registration />
        <Main />

      </div>
    );
  }
}

export default App;
