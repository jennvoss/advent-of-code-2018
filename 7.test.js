const day7 = require('./7');
const testInput = [
  "Step C must be finished before step A can begin.",
  "Step C must be finished before step F can begin.",
  "Step A must be finished before step B can begin.",
  "Step A must be finished before step D can begin.",
  "Step B must be finished before step E can begin.",
  "Step D must be finished before step E can begin.",
  "Step F must be finished before step E can begin."
];
const input = require('./7-input.json');

describe('day 7', () => {
  it('#part 1 - example', () => {
    const result = day7.part1(testInput);
    expect(result).toEqual('CABDFE');
  });

  it('#part 1', () => {
    const result = day7.part1(input);
    expect(result).toEqual('AHJDBEMNFQUPVXGCTYLWZKSROI');
  });

  it('#part 2 - example', () => {
    const result = day7.part2(testInput, 2, 0);
    expect(result).toEqual(15);
  });

  it('#part 2', () => {
    const result = day7.part2(input, 5, 60);
    expect(result).toEqual(1031);
  });
});