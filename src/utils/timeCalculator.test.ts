import {fancyTimeFormat, timeCalculator} from './TimeCalculator';

describe('test time calculator', () => {
  it('should return number', async () => {
    return await expect(timeCalculator(1645223640)).toEqual(expect.any(Number));
  });
});
describe('test time formatter', () => {
  it('should return formatted time for positive number', () => {
    var actual = fancyTimeFormat(100);
    return expect(actual).toEqual('1:40');
  });

  it('should return formatted time for negative number', () => {
    var actual = fancyTimeFormat(-30);
    return expect(actual).toEqual('-0:30');
  });
  it('should return formatted time for negative number < -10', () => {
    var actual = fancyTimeFormat(-5);
    return expect(actual).toEqual('-0:05');
  });
  it('should return formatted time for 0', () => {
    var actual = fancyTimeFormat(0);
    return expect(actual).toEqual('0:00');
  });
});
