const input = require('./8-input.json')[0];
const testInput = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2";

const getArr = (str) => str.split(' ').map(i => Number(i));
const sum = (a, b) => a + b;

function part1(str) {
  let arr = getArr(str);
  let total = 0;
  let position = 0;

  const increaseTotal = (start, entryCount) => {
    total += arr.slice(start + 2, start + 2 + entryCount).reduce(sum);
  }

  const getMetadata = (index) => {
    let children = arr[index];
    let entryCount = arr[index+1];

    if (children === 0) {
      increaseTotal(index, entryCount);
      position += entryCount;
      return;
    }
    for (let i = 0; i < children; i++) {
      position+=2;
      getMetadata(position);
    }
    increaseTotal(position, entryCount);
    position += entryCount;
  }
  getMetadata(0);
  return total;
}
// console.log(part1(testInput));
// console.log(part1(input));

function part2(str) {
  let arr = getArr(str);
  let position = 0;

  const getEntries = (start, entryCount) => {
    return arr.slice(start + 2, start + 2 + entryCount);
  }

  const getMetadata = (index) => {
    let children = arr[index];
    let entryCount = arr[index + 1];
    let childMetadata = [];

    if (children === 0) {
      position += entryCount;
      return getEntries(index, entryCount);
    }

    for (let i = 0; i < children; i++) {
      position += 2;
      childMetadata.push(getMetadata(position).reduce(sum));
    }

    let val = getEntries(position, entryCount).map(p => {
      if (p > children || p === 0) return 0;
      return childMetadata[p-1];
    }).reduce(sum);

    position += entryCount;
    return [val];
  }
  return getMetadata(0)[0];
}
// console.log(part2(testInput));
// console.log(part2(input));

module.exports = {
  part1: part1,
  part2: part2
};
