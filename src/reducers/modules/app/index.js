import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// ACTIONS
export const TOGGLE_SET_ALARM_MODE = 'APP/TOGGLE_SET_ALARM_MODE';
export const TOGGLE_SET_TIME_MODE = 'APP/TOGGLE_SET_TIME_MODE';
export const TOGGLE_DARK_MODE = 'APP/TOGGLE_DARK_MODE';
export const TOGGLE_CHOOSE_ALARM_MODE = 'APP/TOGGLE_CHOOSE_ALARM_MODE';
export const SELECT_ALARM_SOUND = 'APP/SELECT_ALARM_SOUND';

// ACTION CREATORS
export const toggleSetAlarmMode = () => ({
  type: TOGGLE_SET_ALARM_MODE
});

export const toggleSetTimeMode = () => ({
  type: TOGGLE_SET_TIME_MODE
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE
});

export const toggleChooseAlarmMode = () => ({
  type: TOGGLE_CHOOSE_ALARM_MODE,
});

export const selectAlarmSound = (mp3) => ({
  type: SELECT_ALARM_SOUND,
  payload: {
    mp3,
  },
});

// SELECTORS
export const getIsInSetAlarmMode = state => state ? state.isInSetAlarmMode === true : false;
export const getIsInSetTimeMode = state => state ? state.isInSetTimeMode === true : false;
export const getIsInChooseAlarmMode = state => state ? state.isInChooseAlarmMode === true : false;
export const getAlarmSound = state => (state && state.alarmSound) ? state.alarmSound : 'alarm1.mp3';

const defaultState = {
  isInSetAlarmMode: false,
  isInSetTimeMode: false,
  alarmSound: 'alarm1.mp3',
};

// REDUCERS
const modeReducers = handleActions({
  [TOGGLE_SET_ALARM_MODE]: state => Object.assign({}, state, { isInSetAlarmMode: !state.isInSetAlarmMode }),
  [TOGGLE_SET_TIME_MODE]: state => Object.assign({}, state, { isInSetTimeMode: !state.isInSetTimeMode }),
  [TOGGLE_DARK_MODE]: state => Object.assign({}, state, { isInDarkMode: !state.isInDarkMode }),
  [TOGGLE_CHOOSE_ALARM_MODE]: state => Object.assign({}, state, { isInChooseAlarmMode: !state.isInChooseAlarmMode }),
  [SELECT_ALARM_SOUND]: (state, action) => Object.assign({}, state, { alarmSound: action.payload.mp3 }),
}, defaultState);

export default combineReducers({
  modes: modeReducers,
});
