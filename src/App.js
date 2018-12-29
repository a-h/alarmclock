import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './Clock.js'
import { getElapsedSeconds } from './reducers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock seconds={this.props.seconds} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("app", JSON.stringify(state));
  return {
    seconds: getElapsedSeconds(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
