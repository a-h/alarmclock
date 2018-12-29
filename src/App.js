import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock hours="12" minutes="1" seconds="0"/>  
      </div>
    );
  }
}

export default App;
