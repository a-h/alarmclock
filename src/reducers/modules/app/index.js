import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// ACTIONS
export const TOGGLE_SET_ALARM_MODE = 'APP/TOGGLE_SET_ALARM_MODE';
export const TOGGLE_SET_TIME_MODE = 'APP/TOGGLE_SET_TIME_MODE';
export const TOGGLE_DARK_MODE = 'APP/TOGGLE_DARK_MODE';
export const TOGGLE_CHOOSE_ALARM_MODE = 'APP/TOGGLE_CHOOSE_ALARM_MODE';
export const USE_ALARM_SOUND = 'APP/USE_ALARM_SOUND';
export const TOGGLE_TEST_SOUND = 'APP/TOGGLE_TEST_SOUND';
export const STOP_TEST_SOUND = 'APP/STOP_TEST_SOUND';

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

export const useAlarmSound = (mp3) => ({
  type: USE_ALARM_SOUND,
  payload: {
    mp3,
  },
});

export const toggleTestSound = () => ({
  type: TOGGLE_TEST_SOUND
});

export const stopTestSound = () => ({
  type: STOP_TEST_SOUND
});

// SELECTORS
export const getIsInSetAlarmMode = state => state ? state.isInSetAlarmMode === true : false;
export const getIsInSetTimeMode = state => state ? state.isInSetTimeMode === true : false;
export const getIsInChooseAlarmMode = state => state ? state.isInChooseAlarmMode === true : false;
export const getAlarmSound = state => (state && state.alarmSound) ? state.alarmSound : 'alarm1.mp3';
export const getIsTestSoundPlaying = state => (state && state.isTestSoundPlaying);

const defaultModesState = {
  isInSetAlarmMode: false,
  isInSetTimeMode: false,
  alarmSound: 'alarm1.mp3',
  isTestSoundPlaying: false,
};

// REDUCERS
const modesReducers = handleActions({
  [TOGGLE_SET_ALARM_MODE]: state => Object.assign({}, state, { isInSetAlarmMode: !state.isInSetAlarmMode }),
  [TOGGLE_SET_TIME_MODE]: state => Object.assign({}, state, { isInSetTimeMode: !state.isInSetTimeMode }),
  [TOGGLE_DARK_MODE]: state => Object.assign({}, state, { isInDarkMode: !state.isInDarkMode }),
  [TOGGLE_CHOOSE_ALARM_MODE]: state => Object.assign({}, state, { isInChooseAlarmMode: !state.isInChooseAlarmMode }),
  [USE_ALARM_SOUND]: (state, action) => Object.assign({}, state, { alarmSound: action.payload.mp3 }),
  [TOGGLE_TEST_SOUND]: (state, action) => Object.assign({}, state, { isTestSoundPlaying: !state.isTestSoundPlaying }),
  [STOP_TEST_SOUND]: (state, action) => Object.assign({}, state, { isTestSoundPlaying: false }),
}, defaultModesState);

export default combineReducers({
  modes: modesReducers,
});

export const defaultState = {
  modes: defaultModesState,
};
