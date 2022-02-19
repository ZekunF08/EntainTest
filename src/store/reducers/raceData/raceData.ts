import {
  UPDATE_RACE_DATA,
  raceDataActions,
  raceState,
  TOGGLE_GREYHOUND,
  TOGGLE_HARNESS,
  TOGGLE_HORSE,
  REMOVE_RACE_DATA,
} from './types';
import {RaceSummary} from '../../../interfaces/racingData.interface';

export const initialState: raceState = {
  raceDataSet: [] as RaceSummary[],
  showHorse: true,
  showHarness: true,
  showGreyhound: true,
};

export const raceDataReducer = (
  state = initialState,
  action: raceDataActions,
) => {
  switch (action.type) {
    case REMOVE_RACE_DATA:
      var index = state.raceDataSet.findIndex(
        x => x.race_id === action.payload,
      );
      var newRaceDataSet = [...state.raceDataSet];
      if (index > -1) {
        newRaceDataSet.splice(index, 1);
      }
      return {
        ...state,
        raceDataSet: newRaceDataSet,
      };
    case UPDATE_RACE_DATA:
      return {
        ...state,
        raceDataSet: action.payload,
      };
    case TOGGLE_GREYHOUND:
      return {
        ...state,
        showGreyhound: action.payload,
      };
    case TOGGLE_HARNESS:
      return {
        ...state,
        showHarness: action.payload,
      };
    case TOGGLE_HORSE:
      return {
        ...state,
        showHorse: action.payload,
      };
  }
  return state;
};
