const day4 = require('./4');
const testInput = [
  '[1518-11-01 00:00] Guard #10 begins shift',
  '[1518-11-01 00:05] falls asleep',
  '[1518-11-01 00:25] wakes up',
  '[1518-11-01 00:30] falls asleep',
  '[1518-11-01 00:55] wakes up',
  '[1518-11-01 23:58] Guard #99 begins shift',
  '[1518-11-02 00:40] falls asleep',
  '[1518-11-02 00:50] wakes up',
  '[1518-11-03 00:05] Guard #10 begins shift',
  '[1518-11-03 00:24] falls asleep',
  '[1518-11-03 00:29] wakes up',
  '[1518-11-04 00:02] Guard #99 begins shift',
  '[1518-11-04 00:36] falls asleep',
  '[1518-11-04 00:46] wakes up',
  '[1518-11-05 00:03] Guard #99 begins shift',
  '[1518-11-05 00:45] falls asleep',
  '[1518-11-05 00:55] wakes up'
];
const input = require('./4-input.json');

describe('day 4', () => {
  it('#part 1 - example', () => {
    const result = day4.part1(testInput);
    expect(result).toEqual(240);
  });

  it('#part 1', () => {
    const result = day4.part1(input);
    expect(result).toEqual(131469);
  });

  it('#part 2 - example', () => {
    const result = day4.part2(testInput);
    expect(result).toEqual(4455);
  });

  it('#part 2', () => {
    const result = day4.part2(input);
    expect(result).toEqual(96951);
  });
});