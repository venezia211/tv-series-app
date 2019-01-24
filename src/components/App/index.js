import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';


class App extends Component {
  state = {
    series: []
  }

      
componentDidMount() {
  const series = ['Happy', 'Sopranos', 'Banshee'];

  setTimeout(() => {
    this.setState({series: series });
  }, 2000);
    //first is function 2nd is delay

}    
//will be immdediatley invoked after the component has been rendered.
//create additonal array with the name of series.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Tv Series List </h1>
        </header>
       <Intro message="Here you can find all of your most loved series" />   
       The length of series array - {this.state.series.length}      
       
      </div>
    );
  }
}

export default App;
