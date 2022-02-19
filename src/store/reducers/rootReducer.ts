import {combineReducers} from 'redux';
import {raceDataReducer} from './raceData/raceData';
export default combineReducers({
  raceData: raceDataReducer,
});
