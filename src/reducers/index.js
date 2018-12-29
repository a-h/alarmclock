import timer, * as fromTimer from './modules/timer';
import { combineReducers } from 'redux';

export const getElapsedSeconds = (
  state => fromTimer.getElapsedSeconds(state.timer.elapsed)
);

const rootReducer = combineReducers({
    timer,
});

export default rootReducer;
