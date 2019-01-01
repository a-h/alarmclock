import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './Clock.js'
import { getTime } from './reducers'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid } from '@material-ui/core';
import { Alarm, WbSunny, AccessTime, Settings } from '@material-ui/icons';
import { toggleSetTimeMode } from './reducers/modules/time';
import { toggleSetAlarmMode } from './reducers/modules/app';
import { getIsInSetTimeMode, getIsInSetAlarmMode } from './reducers'

const App = ({ time, isInSetTimeMode, toggleSetTimeMode, isInSetAlarmMode, toggleSetAlarmMode }) => (
  <div className="App" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <Grid container spacing={16} justify="center" alignItems="center" direction="row">
      <Grid item>
        <Button variant="contained" color="default" onClick={toggleSetAlarmMode}>
          Set Alarm
              <Alarm />
        </Button>
        <Dialog
          open={isInSetAlarmMode}
          onClose={toggleSetAlarmMode}
        >
          <DialogTitle>{"Set alarm"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
              Disagree
            </Button>
            <Button color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
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
  isInSetAlarmMode: getIsInSetAlarmMode(state),
});

const mapDispatchToProps = {
  toggleSetTimeMode: toggleSetTimeMode,
  toggleSetAlarmMode: toggleSetAlarmMode,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
