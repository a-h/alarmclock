import timer, * as fromTime from './modules/time';
import alarm, * as fromAlarm from './modules/alarm';
import app, * as fromApp from './modules/app';
import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import { SECOND_ELAPSED } from '../components/timer'

export const getTime = state => fromTime.getTime(state.timer.time);

export const getIsInSetTimeMode = state =>
    fromApp.getIsInSetTimeMode(state.app.modes);

export const getIsInSetAlarmMode = state =>
    fromApp.getIsInSetAlarmMode(state.app.modes);

export const getIsInChooseAlarmMode = state =>
    fromApp.getIsInChooseAlarmMode(state.app.modes);

export const getAlarmSound = state =>
    fromApp.getAlarmSound(state.app.modes);

export const getAlarmTime = state =>
    fromAlarm.getAlarmTime(state.alarm.time);

export const getIsAlarmActive = state =>
    fromAlarm.getIsAlarmActive(state.alarm.modes);

export const getIsAlarmSounding = state =>
    fromAlarm.getIsAlarmSounding(state.alarm.modes);

const alarmActivationReducer = (state, action) => {
    if (action.type !== SECOND_ELAPSED) {
        return state;
    }
    if (!getIsAlarmActive(state)) {
        return state;
    }
    
    const currentTime = getTime(state);
    const alarmTime = getAlarmTime(state);
    
    const currentDate = new Date(2000, 0, 1, currentTime.hours, currentTime.minutes, currentTime.seconds);
    const alarmDate = new Date(2000, 0, 1, alarmTime.hours, alarmTime.minutes, alarmTime.seconds);
    
    if (currentDate.getTime() !== alarmDate.getTime()) {
        return state;
    }

    return { ...state,
        alarm: {
            ...state.alarm,
            modes: {
                ...state.alarm.modes,
                isAlarmSounding: true,
            },
        },
    };
};

const combinedReducers = combineReducers({
    timer,
    alarm,
    app,
});

const rootReducer = reduceReducers(alarmActivationReducer, combinedReducers);

export default rootReducer;

export const defaultState = {
    timer: fromTime.defaultState,
    alarm: fromAlarm.defaultState,
    app: fromApp.defaultState,
};