import {timeCalculator} from './TimeCalculator';

describe('test time calculator', () => {
  it('should return number', async () => {
    return await expect(timeCalculator(1645223640)).toEqual(expect.any(Number));
  });
});
