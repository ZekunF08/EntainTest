import {RaceSummary} from '../../../interfaces/racingData.interface';
export const UPDATE_RACE_DATA = 'UPDATE_RACE_DATA';
export const TOGGLE_GREYHOUND = 'TOGGLE_GREYHOUND';
export const TOGGLE_HARNESS = 'TOGGLE_HARNESS';
export const TOGGLE_HORSE = 'TOGGLE_HORSE';
export const REMOVE_RACE_DATA = 'REMOVE_RACE_DATA';

interface removeRaceDataAction {
  type: typeof REMOVE_RACE_DATA;
  payload: string;
}

interface updateRaceDataAction {
  type: typeof UPDATE_RACE_DATA;
  payload: RaceSummary[];
}

interface toggleGreyhoundAction {
  type: typeof TOGGLE_GREYHOUND;
  payload: boolean;
}

interface toggleHarnessAction {
  type: typeof TOGGLE_HARNESS;
  payload: boolean;
}

interface toggleHorseAction {
  type: typeof TOGGLE_HORSE;
  payload: boolean;
}

export interface raceState {
  raceDataSet: RaceSummary[];
  showHorse: boolean;
  showHarness: boolean;
  showGreyhound: boolean;
}

export type raceDataActions =
  | removeRaceDataAction
  | updateRaceDataAction
  | toggleGreyhoundAction
  | toggleHarnessAction
  | toggleHorseAction;
