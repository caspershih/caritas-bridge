import React, { Component } from 'react';
import Main from "./pages/Main";
import './App.css';
import NonProfitList from './components/NonProfitList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <NonProfitList />
      </div>
    );
  }
}

export default App;
