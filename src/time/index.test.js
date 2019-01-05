import * as time from './';

describe('addSecond', () => {
  it('should increment the seconds when the seconds are at 0', () => {
    const start = time.time(0, 0, 0);
    const expected = time.time(0, 0, 1)
    const actual = time.addSecond(start);
    expect(actual).toEqual(expected);
  });
  it('should increment the minute and set the seconds to zero seconds are at 59', () => {
    const start = time.time(0, 0, 59);
    const expected = time.time(0, 1, 0)
    const actual = time.addSecond(start);
    expect(actual).toEqual(expected);
  });
  it('should increment the hour, when the minute and the seconds are 59', () => {
    const start = time.time(0, 59, 59);
    const expected = time.time(1, 0, 0)
    const actual = time.addSecond(start);
    expect(actual).toEqual(expected);
  });
  it('should increment back to zero, when the hour is 23, minute and seconds are 59', () => {
    const start = time.time(23, 59, 59);
    const expected = time.time(0, 0, 0)
    const actual = time.addSecond(start);
    expect(actual).toEqual(expected);
  });
});
