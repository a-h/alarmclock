import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// ACTIONS
export const TOGGLE_SET_ALARM_MODE = 'APP/TOGGLE_SET_ALARM_MODE';
export const TOGGLE_SET_TIME_MODE = 'APP/TOGGLE_SET_TIME_MODE';

// ACTION CREATORS
export const toggleSetAlarmMode = () => ({
  type: TOGGLE_SET_ALARM_MODE
});

export const toggleSetTimeMode = () => ({
  type: TOGGLE_SET_TIME_MODE
});

// SELECTORS
export const getIsInSetAlarmMode = state => state ? state.isInSetAlarmMode === true : false;
export const getIsInSetTimeMode = state => state ? state.isInSetTimeMode === true : false;

const defaultState = {
  isInSetAlarmMode: false,
  isInSetTimeMode: false,
};

// REDUCERS
const modeReducers = handleActions({
  [TOGGLE_SET_ALARM_MODE]: (state) => {
    return Object.assign({}, state, { isInSetAlarmMode: !state.isInSetAlarmMode });
  },
  [TOGGLE_SET_TIME_MODE]: (state) => {
    return Object.assign({}, state, { isInSetTimeMode: !state.isInSetTimeMode });
  },
}, defaultState);

export default combineReducers({
  modes: modeReducers,
});
