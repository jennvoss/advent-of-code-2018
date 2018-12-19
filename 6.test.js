const day6 = require('./6');
const testInput = ['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'];
const input = require('./6-input.json');

describe('day 6', () => {
  it('#part 1 - example', () => {
    const result = day6.part1(testInput);
    expect(result).toEqual(17);
  });

  it('#part 1', () => {
    const result = day6.part1(input);
    expect(result).toEqual(3969);
  });

  it('#part 2 - example', () => {
    const result = day6.part2(testInput, 32);
    expect(result).toEqual(16);
  });

  it('#part 2', () => {
    const result = day6.part2(input, 10000);
    expect(result).toEqual(42123);
  });
});