const input = require('./5-input.json')[0];

const letterMatch = (a,b) => a.toLowerCase() === b.toLowerCase();
const polarityMatch = (a, b) => a === b;
const reactUnits = (arr) => {
  return arr.reduce((a, b) => {
    let lastLetter = a.substr(a.length - 1);
    if (!lastLetter) return b;

    if (letterMatch(lastLetter, b) && !polarityMatch(lastLetter, b)) {
      a = a.substr(0, a.length - 1)
    } else {
      a += b;
    }
    return a;
  }
)};

function part1(str) {
  return reactUnits(str.split('')).length;
}
// console.log(part1(input));

function part2(str) {
  const reacted = reactUnits(str.split(''));
  const uniq = new Set(reacted.split('').map(l => l.toLowerCase()));
  const removeL = (str, l) => str.split('').filter(x => x.toLowerCase() !== l);
  const lengthWithoutL = (str, l) => reactUnits(removeL(str, l)).length;

  return Array.from(uniq).reduce((a,b) => {
    if (typeof a !== 'number') {a = lengthWithoutL(reacted, a)}
    return Math.min(a, lengthWithoutL(reacted, b));
  });
}
// console.log(part2(input));

module.exports = {
  part1: part1,
  part2: part2
};
