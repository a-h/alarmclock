import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { time, addSecondTo } from '../../../time';

// ACTIONS
export const SECOND_ELAPSED = 'TIMER/SECOND_ELAPSED';

// ACTION CREATORS
export const secondElapsed = () => ({
  type: SECOND_ELAPSED
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
    return Object.assign({}, state, { time: addSecondTo(getTime(state)) });
  },
}, defaultState);

export default combineReducers({
  time: timeReducers,
});
