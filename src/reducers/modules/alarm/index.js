import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { time, incrementHour, decrementHour, incrementMinute, decrementMinute, incrementSecond, decrementSecond } from '../../../time';
import { SECOND_ELAPSED } from '../../../components/timer'

// ACTIONS
export const ALARM_HOUR_INCREMENT = 'ALARM/HOUR_INCREMENT';
export const ALARM_HOUR_DECREMENT = 'ALARM/HOUR_DECREMENT';
export const ALARM_MINUTE_INCREMENT = 'ALARM/MINUTE_INCREMENT';
export const ALARM_MINUTE_DECREMENT = 'ALARM/MINUTE_DECREMENT';
export const ALARM_SECOND_INCREMENT = 'ALARM/SECOND_INCREMENT';
export const ALARM_SECOND_DECREMENT = 'ALARM/SECOND_DECREMENT';
export const TOGGLE_ALARM_ACTIVE = 'APP/TOGGLE_ALARM_ACTIVE';
export const SET_ALARM_ACTIVE = 'APP/SET_ALARM_ACTIVE';

// ACTION CREATORS
export const toggleAlarmActive = () => ({
  type: TOGGLE_ALARM_ACTIVE
});

export const setAlarmActive = () => ({
  type: SET_ALARM_ACTIVE
});

export const alarmHourIncrement = () => ({
  type: ALARM_HOUR_INCREMENT
});

export const alarmHourDecrement = () => ({
  type: ALARM_HOUR_DECREMENT
});

export const alarmMinuteIncrement = () => ({
  type: ALARM_MINUTE_INCREMENT
});

export const alarmMinuteDecrement = () => ({
  type: ALARM_MINUTE_DECREMENT
});

export const alarmSecondIncrement = () => ({
  type: ALARM_SECOND_INCREMENT
});

export const alarmSecondDecrement = () => ({
  type: ALARM_SECOND_DECREMENT
});

// SELECTORS
export const getIsAlarmActive = state => state ? state.isAlarmActive === true : false;
export const getAlarmTime = state => state ? 
  time(state.hours, state.minutes, state.seconds)
  : time(0, 0, 0);

// REDUCERS
const timeReducers = handleActions({
  [SECOND_ELAPSED]: (state) => {
    //TODO: Handle the alarm if required by dispatching an event.
    return state;
  },
  [ALARM_HOUR_INCREMENT]: state => incrementHour(getAlarmTime(state)),
  [ALARM_HOUR_DECREMENT]: state => decrementHour(getAlarmTime(state)),
  [ALARM_MINUTE_INCREMENT]: state => incrementMinute(getAlarmTime(state)),
  [ALARM_MINUTE_DECREMENT]: state => decrementMinute(getAlarmTime(state)),
  [ALARM_SECOND_INCREMENT]: state => incrementSecond(getAlarmTime(state)),
  [ALARM_SECOND_DECREMENT]: state => decrementSecond(getAlarmTime(state)),
}, time(0, 0, 0));

const defaultModeState = {
  isAlarmActive: false,
}

const modeReducers = handleActions({
  [TOGGLE_ALARM_ACTIVE]: (state) => {
    return Object.assign({}, state, { isAlarmActive: !state.isAlarmActive });
  },
  [SET_ALARM_ACTIVE]: (state) => {
    return Object.assign({}, state, { isAlarmActive: true });
  },
}, defaultModeState);

export default combineReducers({
  time: timeReducers,
  modes: modeReducers,
});
