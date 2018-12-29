import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './Clock.js'
import { getTime } from './reducers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock hours={this.props.time.hours} minutes={this.props.time.minutes} seconds={this.props.time.seconds} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: getTime(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
