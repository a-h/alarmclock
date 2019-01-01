import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// ACTIONS
export const TOGGLE_SET_ALARM_MODE = 'APP/TOGGLE_SET_ALARM_MODE';

// ACTION CREATORS
export const toggleSetAlarmMode = () => ({
  type: TOGGLE_SET_ALARM_MODE
});

// SELECTORS
export const getIsInSetAlarmMode = state => state.setAlarmMode;

const defaultState = {}

// REDUCERS
const modeReducers = handleActions({
  [TOGGLE_SET_ALARM_MODE]: (state) => {
    return Object.assign({}, state, { setAlarmMode: !state.setAlarmMode });
  },
}, defaultState);

export default combineReducers({
  mode: modeReducers,
});
