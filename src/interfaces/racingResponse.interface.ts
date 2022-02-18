import {RacingData} from './racingData.interface';

export type JSONResponse = () => {
  ok?: boolean;
  message?: string;
  status: 200 | number;
  data: () => Promise<RacingData>[];
};
