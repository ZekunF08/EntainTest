import {getRacing} from './getRacing';

describe('test get racing api', () => {
  it('should return data', async () => {
    var result = await getRacing();
    console.log('result', result);
  });
});
