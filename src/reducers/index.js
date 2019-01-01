import timer, * as fromTime from './modules/time';
import alarm, * as fromAlarm from './modules/alarm';
import app, * as fromApp from './modules/app';
import { combineReducers } from 'redux';

export const getTime = state => fromTime.getTime(state.timer.time);

export const getIsAlarmActive = state =>
    fromApp.getIsAlarmActive(state.app.modes);

export const getIsInSetTimeMode = state =>
    fromApp.getIsInSetTimeMode(state.app.modes);

export const getAlarmTime = state =>
    fromAlarm.getAlarmTime(state.alarm.time);

export const getIsInSetAlarmMode = state =>
    fromApp.getIsInSetAlarmMode(state.app.modes);

const rootReducer = combineReducers({
    timer,
    alarm,
    app,
});

export default rootReducer;
