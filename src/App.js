import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './Clock.js'
import { getTime } from './reducers'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Alarm, WbSunny, AccessTime, Settings } from '@material-ui/icons';
import { toggleSetTimeMode } from './reducers/modules/time';
import { getIsInSetTimeMode } from './reducers'

const App = ({ time, isInSetTimeMode, toggleSetTimeMode }) => (
  <div className="App" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <Grid container spacing={16} justify="center" alignItems="center" direction="row">
      <Grid item>
        <Button variant="contained" color="default">
          Set Alarm
              <Alarm />
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="default">
          Brightness
              <WbSunny />
        </Button>
      </Grid>
    </Grid>
    <Grid container spacing={16} justify="center" alignItems="center" direction="column">
      <Grid item>
        <Clock hours={time.hours} minutes={time.minutes} seconds={time.seconds} isInSetTimeMode={isInSetTimeMode} />
      </Grid>
    </Grid>
    <Grid container spacing={16} justify="center" alignItems="center" direction="row">
      <Grid item>
        <Button variant="contained" color="default">
          Settings
              <Settings />
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="default" onClick={toggleSetTimeMode}>
          Set Time
              <AccessTime />
        </Button>
      </Grid>
    </Grid>
  </div>
);

const mapStateToProps = state => ({
  time: getTime(state),
  isInSetTimeMode: getIsInSetTimeMode(state),
});

const mapDispatchToProps = {
  toggleSetTimeMode: toggleSetTimeMode,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
