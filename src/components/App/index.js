import React, { Component } from 'react';
import Main from '../Main';
//import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Tv Series List </h1>
        </header>
       <Main />
      </div>
    );
  }
}

export default App;
