const day8 = require('./8');
const testInput = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2";
const input = require('./8-input.json')[0];

describe('day 8', () => {
  it('#part 1 - example', () => {
    const result = day8.part1(testInput);
    expect(result).toEqual(138);
  });

  it('#part 1', () => {
    const result = day8.part1(input);
    expect(result).toEqual(45865);
  });

  it('#part 2 - example', () => {
    const result = day8.part2(testInput, 2, 0);
    expect(result).toEqual(66);
  });

  it('#part 2', () => {
    const result = day8.part2(input, 5, 60);
    expect(result).toEqual(22608);
  });
});