import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// ACTIONS
export const TOGGLE_SET_ALARM_MODE = 'APP/TOGGLE_SET_ALARM_MODE';
export const TOGGLE_SET_TIME_MODE = 'APP/TOGGLE_SET_TIME_MODE';
export const TOGGLE_ALARM_ACTIVE = 'APP/TOGGLE_ALARM_ACTIVE';
export const SET_ALARM_ACTIVE = 'APP/SET_ALARM_ACTIVE';

// ACTION CREATORS
export const toggleSetAlarmMode = () => ({
  type: TOGGLE_SET_ALARM_MODE
});

export const toggleSetTimeMode = () => ({
  type: TOGGLE_SET_TIME_MODE
});

export const toggleAlarmActive = () => ({
  type: TOGGLE_ALARM_ACTIVE
});

export const setAlarmActive = () => ({
  type: SET_ALARM_ACTIVE
});

// SELECTORS
export const getIsInSetAlarmMode = state => state ? state.isInSetAlarmMode === true : false;
export const getIsInSetTimeMode = state => state ? state.isInSetTimeMode === true : false;
export const getIsAlarmActive = state => state ? state.isAlarmActive === true : false;

const defaultState = {
  isInSetAlarmMode: false,
  isInSetTimeMode: false,
  isAlarmActive: false,
};

// REDUCERS
const modeReducers = handleActions({
  [TOGGLE_SET_ALARM_MODE]: (state) => {
    return Object.assign({}, state, { isInSetAlarmMode: !state.isInSetAlarmMode });
  },
  [TOGGLE_SET_TIME_MODE]: (state) => {
    return Object.assign({}, state, { isInSetTimeMode: !state.isInSetTimeMode });
  },
  [TOGGLE_ALARM_ACTIVE]: (state) => {
    return Object.assign({}, state, { isAlarmActive: !state.isAlarmActive });
  },
  [SET_ALARM_ACTIVE]: (state) => {
    return Object.assign({}, state, { isAlarmActive: true });
  },
}, defaultState);

export default combineReducers({
  modes: modeReducers,
});
