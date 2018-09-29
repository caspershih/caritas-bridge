import React, { Component } from 'react';
import Main from "./pages/Main";
import './App.css';
<<<<<<< HEAD
//import SearchBar from "./components/SearchField/SearchBar";
=======
import NonProfitList from './components/NonProfitList';
>>>>>>> 00974bfd4f5097cb1c958d4fa75d28106747851a

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
