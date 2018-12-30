import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { time, addSecond, incrementHour, decrementHour, incrementMinute, decrementMinute, incrementSecond, decrementSecond } from '../../../time';

// ACTIONS
export const SECOND_ELAPSED = 'TIMER/SECOND_ELAPSED';
export const HOUR_INCREMENT = 'TIMER/HOUR_INCREMENT';
export const HOUR_DECREMENT = 'TIMER/HOUR_DECREMENT';
export const MINUTE_INCREMENT = 'TIMER/MINUTE_INCREMENT';
export const MINUTE_DECREMENT = 'TIMER/MINUTE_DECREMENT';
export const SECOND_INCREMENT = 'TIMER/SECOND_INCREMENT';
export const SECOND_DECREMENT = 'TIMER/SECOND_DECREMENT';

// ACTION CREATORS
export const secondElapsed = () => ({
  type: SECOND_ELAPSED
});

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

// SELECTORS
export const getTime = state => time(state.time.hours, state.time.minutes, state.time.seconds);

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

export default combineReducers({
  time: timeReducers,
});
