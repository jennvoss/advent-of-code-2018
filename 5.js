const input = require('./5-input.json')[0];

const letterMatch = (a,b) => a.toLowerCase() === b.toLowerCase();
const polarityMatch = (a, b) => a === b;

function part1(str) {
  return str.split('').reduce((a, b) => {
    let lastLetter = a.substr(a.length - 1);
    if (!lastLetter) return b;

    if (letterMatch(lastLetter, b) && !polarityMatch(lastLetter, b)) {
      a = a.substr(0, a.length - 1)
    } else {
      a += b;
    }
    return a;
  }).length;
}
// console.log(part1(input));

function part2(arr) {
}
// console.log(part2(input));

module.exports = {
  part1: part1,
  part2: part2
};
