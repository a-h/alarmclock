import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './Clock.js'
import { getTime } from './reducers'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Grid container spacing={16} justify="center" alignItems="center" direction="column">
          <Grid item>
            <Clock hours={this.props.time.hours} minutes={this.props.time.minutes} seconds={this.props.time.seconds} />
          </Grid>
          <Grid item>
            <Button>Set Alarm</Button>
          </Grid>
        </Grid>
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
