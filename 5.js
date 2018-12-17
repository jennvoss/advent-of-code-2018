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
})};

function part1(str) {
  return reactUnits(str.split('')).length;
}
// console.log(part1(input));

const removeEntries = (str, l) => {
  return str.split('').filter(x => x.toLowerCase() !== l);
};

function part2(str) {
  const reacted = reactUnits(str.split(''));
  const uniq = new Set(reacted.split('').map(l => l.toLowerCase()));
  let shortestPolymer;

  uniq.forEach(l => {
    let testStr = removeEntries(reacted, l);
    let len = reactUnits(testStr).length;
    if (!shortestPolymer || len < shortestPolymer) {shortestPolymer = len};
  });

  return shortestPolymer;
}
// console.log(part2(input));

module.exports = {
  part1: part1,
  part2: part2
};
