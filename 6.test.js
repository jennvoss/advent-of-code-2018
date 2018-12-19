const day6 = require('./6');
const testInput = ['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'];
const input = require('./6-input.json')[0];

describe('day 6', () => {
  it('#part 1 - example', () => {
    const result = day6.part1(testInput);
    expect(result).toEqual(17);
  });

  it('#part 1', () => {
    const result = day6.part1(input);
    expect(result).toEqual(3969);
  });

});