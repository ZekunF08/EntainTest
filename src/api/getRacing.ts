import {api, baseURL} from './api';
import {RacingData} from '../interfaces/racingData.interface';
export const getRacing = () => {
  return api.get<RacingData>(
    `${baseURL}rest/v1/racing/?method=nextraces&count=10`,
  );
};
