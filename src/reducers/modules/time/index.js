import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { time, addSecond, addHour, removeHour } from '../../../time';

// ACTIONS
export const SECOND_ELAPSED = 'TIMER/SECOND_ELAPSED';
export const HOUR_INCREMENT = 'TIMER/HOUR_INCREMENT';
export const HOUR_DECREMENT = 'TIMER/HOUR_DECREMENT';

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
    return Object.assign({}, state, { time: addHour(getTime(state))});
  },
  [HOUR_DECREMENT]: (state) => {
    return Object.assign({}, state, { time: removeHour(getTime(state))});
  },
}, defaultState);

export default combineReducers({
  time: timeReducers,
});
