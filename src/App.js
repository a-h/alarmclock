import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './Clock.js'
import { getTime, getAlarmTime, getIsAlarmSounding } from './reducers'
import { Button, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid } from '@material-ui/core';
import { Alarm, WbSunny, AccessTime, Settings } from '@material-ui/icons';
import { toggleSetAlarmMode, toggleSetTimeMode, toggleDarkMode, toggleChooseAlarmMode, useAlarmSound, toggleTestSound, stopTestSound } from './reducers/modules/app';
import { getIsAlarmActive, getIsInSetTimeMode, getIsInSetAlarmMode, getIsInChooseAlarmMode, getAlarmSound, getIsTestSoundPlaying } from './reducers'
import { hourIncrement, hourDecrement, minuteIncrement, minuteDecrement, secondIncrement, secondDecrement } from './reducers/modules/time'
import { alarmHourIncrement, alarmHourDecrement, alarmMinuteIncrement, alarmMinuteDecrement, alarmSecondIncrement, alarmSecondDecrement } from './reducers/modules/alarm'
import { toggleAlarmActive, setAlarmActive, muteAlarm } from './reducers/modules/alarm'
import Sound from 'react-sound';

const App = ({ time,
  alarmTime, isAlarmActive, toggleAlarmActive, setAlarmActive, isAlarmSounding, muteAlarm,
  toggleDarkMode,
  hourIncrement, hourDecrement, minuteIncrement, minuteDecrement, secondIncrement, secondDecrement,
  alarmHourIncrement, alarmHourDecrement, alarmMinuteIncrement, alarmMinuteDecrement, alarmSecondIncrement, alarmSecondDecrement,
  toggleChooseAlarmMode, isInChooseAlarmMode, useAlarmSound, alarmSound, toggleTestSound, stopTestSound, isTestSoundPlaying,
  isInSetAlarmMode, toggleSetAlarmMode,
  isInSetTimeMode, toggleSetTimeMode,
}) => (
    <div className="App" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Grid container spacing={16} justify="center" alignItems="center" direction="row">
        <Grid item>
          <Button variant="contained" color="default" onClick={toggleAlarmActive}>
            Switch Alarm {isAlarmActive ? "Off" : "On"}
            <Alarm />
          </Button>
          <Dialog open={isAlarmSounding}>
            <DialogTitle>{"ALARM ACTIVE!"}</DialogTitle>
            <DialogContent>
              <Sound
                url={alarmSound}
                playStatus={Sound.status.PLAYING}
              />
              <DialogContentText>
                The alarm has been triggered.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" autoFocus onClick={muteAlarm}>
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
          <Button variant="contained" color="default" onClick={toggleDarkMode}>
            Toggle Dark Mode
              <WbSunny />
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default" onClick={toggleChooseAlarmMode}>
            Audio
              <Settings />
          </Button>
        </Grid>
        <Dialog aria-labelledby="simple-dialog-title" open={isInChooseAlarmMode} onClose={toggleChooseAlarmMode}>
          <DialogTitle id="simple-dialog-title">Choose audio</DialogTitle>
          <List>
            <ListItem button selected={alarmSound === 'alarm1.mp3'} onClick={() => { useAlarmSound('alarm1.mp3'); }}>
              <ListItemText>Alarm 1</ListItemText>
            </ListItem>
            <ListItem button selected={alarmSound === 'alarm2.mp3'} onClick={() => { useAlarmSound('alarm2.mp3'); }}>
              <ListItemText>Alarm 2</ListItemText>
            </ListItem>
            <ListItem button selected={alarmSound === 'alarm3.mp3'} onClick={() => { useAlarmSound('alarm3.mp3'); }}>
              <ListItemText>Alarm 3</ListItemText>
            </ListItem>
            <ListItem button selected={alarmSound === 'alarm4.mp3'} onClick={() => { useAlarmSound('alarm4.mp3'); }}>
              <ListItemText>Alarm 4</ListItemText>
            </ListItem>
          </List>
          <Button variant="contained" color="secondary" onClick={toggleTestSound}>{ isTestSoundPlaying ? <React.Fragment>Stop Test</React.Fragment> : <React.Fragment>Test Sound</React.Fragment> }</Button>
          { isTestSoundPlaying && 
              <Sound
                url={alarmSound}
                playStatus={Sound.status.PLAYING}
              />
          }
          <Button variant="contained" color="primary" onClick={() => { stopTestSound(); toggleChooseAlarmMode() }}>
            OK
          </Button>
        </Dialog>
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
  isInChooseAlarmMode: getIsInChooseAlarmMode(state),
  alarmSound: getAlarmSound(state),
  isAlarmSounding: getIsAlarmSounding(state),
  isTestSoundPlaying: getIsTestSoundPlaying(state),
});

const mapDispatchToProps = {
  toggleAlarmActive: toggleAlarmActive,
  setAlarmActive: setAlarmActive,
  muteAlarm: muteAlarm,
  toggleDarkMode: toggleDarkMode,
  toggleSetTimeMode: toggleSetTimeMode,
  toggleTestSound: toggleTestSound,
  stopTestSound: stopTestSound,
  toggleSetAlarmMode: toggleSetAlarmMode,
  toggleChooseAlarmMode: toggleChooseAlarmMode,
  useAlarmSound: useAlarmSound,
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
