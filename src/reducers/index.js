import timer, * as fromTime from './modules/time';
import { combineReducers } from 'redux';

export const getTime = state => fromTime.getTime(state.timer.time);

export const getIsInSetTimeMode = state => 
    fromTime.getIsInSetTimeMode(state.timer.mode);

const rootReducer = combineReducers({
    timer,
});

export default rootReducer;
