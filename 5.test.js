const day5 = require('./5');
const testInput = 'dabAcCaCBAcCcaDA';
const input = require('./5-input.json')[0];

describe('day 5', () => {
  it('#part 1 - example', () => {
    const result = day5.part1(testInput);
    expect(result).toEqual(10);
  });

  it('#part 1', () => {
    const result = day5.part1(input);
    expect(result).toEqual(11252);
  });

  it('#part 2 - example', () => {
    const result = day5.part2(testInput);
    expect(result).toEqual(4);
  });

  it('#part 2', () => {
    const result = day5.part2(input);
    expect(result).toEqual(6118);
  });
});