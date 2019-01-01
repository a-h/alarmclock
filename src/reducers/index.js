import timer, * as fromTime from './modules/time';
import app, * as fromApp from './modules/app';
import { combineReducers } from 'redux';

export const getTime = state => fromTime.getTime(state.timer.time);

export const getIsInSetTimeMode = state => 
    fromTime.getIsInSetTimeMode(state.timer.mode);

export const getIsInSetAlarmMode = state => 
    fromApp.getIsInSetAlarmMode(state.app.mode);

const rootReducer = combineReducers({
    timer,
    app,
});

export default rootReducer;
