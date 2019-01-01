import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './Clock.js'
import { getTime, getAlarmTime } from './reducers'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid } from '@material-ui/core';
import { Alarm, WbSunny, AccessTime, Settings } from '@material-ui/icons';
import { toggleSetAlarmMode, toggleSetTimeMode } from './reducers/modules/app';
import { getIsAlarmActive, getIsInSetTimeMode, getIsInSetAlarmMode, getShouldSoundAlarm } from './reducers'
import { hourIncrement, hourDecrement, minuteIncrement, minuteDecrement, secondIncrement, secondDecrement } from './reducers/modules/time'
import { alarmHourIncrement, alarmHourDecrement, alarmMinuteIncrement, alarmMinuteDecrement, alarmSecondIncrement, alarmSecondDecrement } from './reducers/modules/alarm'
import { toggleAlarmActive, setAlarmActive } from './reducers/modules/alarm'
import Sound from 'react-sound';

const App = ({ time,
  isAlarmActive, toggleAlarmActive, setAlarmActive, shouldSoundAlarm,
  isInSetTimeMode, toggleSetTimeMode,
  isInSetAlarmMode, toggleSetAlarmMode, alarmTime,
  hourIncrement, hourDecrement, minuteIncrement, minuteDecrement, secondIncrement, secondDecrement,
  alarmHourIncrement, alarmHourDecrement, alarmMinuteIncrement, alarmMinuteDecrement, alarmSecondIncrement, alarmSecondDecrement,
}) => (
    <div className="App" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Grid container spacing={16} justify="center" alignItems="center" direction="row">
        <Grid item>
          <Button variant="contained" color="default" onClick={toggleAlarmActive}>
            Switch Alarm {isAlarmActive ? "Off" : "On"}
            <Alarm />
          </Button>
          <Dialog open={shouldSoundAlarm}>
            <DialogTitle>{"ALARM ACTIVE!"}</DialogTitle>
            <DialogContent>
              <Sound
                url="alarm1.mp3"
                playStatus={Sound.status.PLAYING}
              />
              <DialogContentText>
                The alarm is absolutely blaring loud.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" autoFocus onClick={toggleAlarmActive}>
                Turn alarm off
            </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default" onClick={toggleSetAlarmMode}>
            Set Alarm Time
              <Alarm />
          </Button>
          <Dialog
            open={isInSetAlarmMode}
            onClose={toggleSetAlarmMode}
          >
            <DialogTitle>{"Set alarm"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Set the time when the alarm is going to be triggered.
            </DialogContentText>
              <Clock hours={alarmTime.hours} minutes={alarmTime.minutes} seconds={alarmTime.seconds}
                isInSetTimeMode={true}
                hourIncrement={alarmHourIncrement} hourDecrement={alarmHourDecrement}
                minuteIncrement={alarmMinuteIncrement} minuteDecrement={alarmMinuteDecrement}
                secondIncrement={alarmSecondIncrement} secondDecrement={alarmSecondDecrement}
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary" autoFocus onClick={() => { setAlarmActive(); toggleSetAlarmMode(); }}>
                Done
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
          <Clock hours={time.hours} minutes={time.minutes} seconds={time.seconds} isInSetTimeMode={isInSetTimeMode}
            hourIncrement={hourIncrement} hourDecrement={hourDecrement}
            minuteIncrement={minuteIncrement} minuteDecrement={minuteDecrement}
            secondIncrement={secondIncrement} secondDecrement={secondDecrement}
          />
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
  alarmTime: getAlarmTime(state),
  isAlarmActive: getIsAlarmActive(state),
  isInSetTimeMode: getIsInSetTimeMode(state),
  isInSetAlarmMode: getIsInSetAlarmMode(state),
  shouldSoundAlarm: getShouldSoundAlarm(state),
});

const mapDispatchToProps = {
  toggleAlarmActive: toggleAlarmActive,
  setAlarmActive: setAlarmActive,
  toggleSetTimeMode: toggleSetTimeMode,
  toggleSetAlarmMode: toggleSetAlarmMode,
  hourIncrement: hourIncrement,
  hourDecrement: hourDecrement,
  minuteIncrement: minuteIncrement,
  minuteDecrement: minuteDecrement,
  secondIncrement: secondIncrement,
  secondDecrement: secondDecrement,
  alarmHourIncrement: alarmHourIncrement,
  alarmHourDecrement: alarmHourDecrement,
  alarmMinuteIncrement: alarmMinuteIncrement,
  alarmMinuteDecrement: alarmMinuteDecrement,
  alarmSecondIncrement: alarmSecondIncrement,
  alarmSecondDecrement: alarmSecondDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
