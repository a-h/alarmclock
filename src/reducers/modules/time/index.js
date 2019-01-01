import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { time, addSecond, incrementHour, decrementHour, incrementMinute, decrementMinute, incrementSecond, decrementSecond } from '../../../time';
import { SECOND_ELAPSED } from '../../../components/timer'

// ACTIONS
export const HOUR_INCREMENT = 'TIMER/HOUR_INCREMENT';
export const HOUR_DECREMENT = 'TIMER/HOUR_DECREMENT';
export const MINUTE_INCREMENT = 'TIMER/MINUTE_INCREMENT';
export const MINUTE_DECREMENT = 'TIMER/MINUTE_DECREMENT';
export const SECOND_INCREMENT = 'TIMER/SECOND_INCREMENT';
export const SECOND_DECREMENT = 'TIMER/SECOND_DECREMENT';
export const TOGGLE_SET_TIME_MODE = 'TIMER/TOGGLE_SET_TIME_MODE';

// ACTION CREATORS
export const hourIncrement = () => ({
  type: HOUR_INCREMENT
});

export const hourDecrement = () => ({
  type: HOUR_DECREMENT
});

export const minuteIncrement = () => ({
  type: MINUTE_INCREMENT
});

export const minuteDecrement = () => ({
  type: MINUTE_DECREMENT
});

export const secondIncrement = () => ({
  type: SECOND_INCREMENT
});

export const secondDecrement = () => ({
  type: SECOND_DECREMENT
});

export const toggleSetTimeMode = () => ({
  type: TOGGLE_SET_TIME_MODE
});

// SELECTORS
export const getTime = state => time(state.time.hours, state.time.minutes, state.time.seconds);
export const getIsInSetTimeMode = state => state.setTimeMode;

const startDate = new Date();

const defaultState = {
  time: time(startDate.getHours(), startDate.getMinutes(), startDate.getSeconds()),
}

// REDUCERS
const timeReducers = handleActions({
  [SECOND_ELAPSED]: (state) => {
    return Object.assign({}, state, { time: addSecond(getTime(state)) });
  },
  [HOUR_INCREMENT]: (state) => {
    return Object.assign({}, state, { time: incrementHour(getTime(state))});
  },
  [HOUR_DECREMENT]: (state) => {
    return Object.assign({}, state, { time: decrementHour(getTime(state))});
  },
  [MINUTE_INCREMENT]: (state) => {
    return Object.assign({}, state, { time: incrementMinute(getTime(state))});
  },
  [MINUTE_DECREMENT]: (state) => {
    return Object.assign({}, state, { time: decrementMinute(getTime(state))});
  },
  [SECOND_INCREMENT]: (state) => {
    return Object.assign({}, state, { time: incrementSecond(getTime(state))});
  },
  [SECOND_DECREMENT]: (state) => {
    return Object.assign({}, state, { time: decrementSecond(getTime(state))});
  },
}, defaultState);

const modeReducers = handleActions({
  [TOGGLE_SET_TIME_MODE]: (state) => {
    return Object.assign({}, state, { setTimeMode: !state.setTimeMode });
  },
}, defaultState);

export default combineReducers({
  time: timeReducers,
  mode: modeReducers,
});
