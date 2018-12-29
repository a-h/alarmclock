import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// ACTIONS
export const SECOND_ELAPSED = 'TIMER/SECOND_ELAPSED';

// ACTION CREATORS
export const secondElapsed = () => ({
  type: SECOND_ELAPSED
});

// SELECTORS
export const getElapsedSeconds = state => state.seconds;

const defaultState = {
  seconds: 0,
}

// REDUCERS
const elapsed = handleActions({
  [SECOND_ELAPSED]: (state) => {
    console.log(JSON.stringify(state));
    return Object.assign({}, state, { seconds: getElapsedSeconds(state) + 1 });
  },
}, defaultState);

export default combineReducers({
  elapsed,
});
