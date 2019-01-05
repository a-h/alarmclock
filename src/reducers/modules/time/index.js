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

// SELECTORS
export const getTime = state => time(state.hours, state.minutes, state.seconds);

// REDUCERS
const startDate = new Date();
const defaultTimeState = time(startDate.getHours(), startDate.getMinutes(), startDate.getSeconds());

const timeReducers = handleActions({
  [SECOND_ELAPSED]: state => addSecond(getTime(state)),
  [HOUR_INCREMENT]: state => incrementHour(getTime(state)),
  [HOUR_DECREMENT]: state => decrementHour(getTime(state)),
  [MINUTE_INCREMENT]: state => incrementMinute(getTime(state)),
  [MINUTE_DECREMENT]: state => decrementMinute(getTime(state)),
  [SECOND_INCREMENT]: state => incrementSecond(getTime(state)),
  [SECOND_DECREMENT]: state => decrementSecond(getTime(state)),
}, defaultTimeState);

export default combineReducers({
  time: timeReducers,
});

export const defaultState = {
  time: defaultTimeState,
};