import React, { Component } from 'react';
import Main from "./pages/Main";
import './App.css';
import NonProfitList from './components/NonProfitList';
import SearchField from './components/SearchField/SearchField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <NonProfitList />
        <h3>============</h3>
        <SearchField />
      </div>
    );
  }
}

export default App;
