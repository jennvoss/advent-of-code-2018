const input = require('./8-input.json')[0];

const getArr = (str) => str.split(' ').map(i => Number(i));
const getHeader = (arr, i) => [arr[i], arr[i+1]];
const getMetadata = (arr, i, count) => arr.slice(i + 2, i + 2 + count);
const sum = (a, b) => a + b;

function part1(str) {
  let arr = getArr(str);
  let total = 0;
  let position = 0;

  const increaseTotal = (start, entryCount) => {
    total += getMetadata(arr, start, entryCount).reduce(sum);
  }

  const sumMetadata = (index) => {
    let [children, entryCount] = getHeader(arr, index);

    if (children === 0) {
      increaseTotal(index, entryCount);
      position += entryCount;
      return;
    }

    for (let i = 0; i < children; i++) {
      position+=2;
      sumMetadata(position);
    }

    increaseTotal(position, entryCount);
    position += entryCount;
    return total;
  }

  return sumMetadata(0);
}
// console.log(part1(input));

function part2(str) {
  let arr = getArr(str);
  let position = 0;

  const getNodeValue = (index) => {
    let [children, entryCount] = getHeader(arr, index);
    let childMetadata = [];

    if (children === 0) {
      position += entryCount;
      return getMetadata(arr, index, entryCount);
    }

    for (let i = 0; i < children; i++) {
      position += 2;
      childMetadata.push(getNodeValue(position).reduce(sum));
    }

    let val = getMetadata(arr, position, entryCount).map(p => {
      if (p > children || p === 0) return 0;
      return childMetadata[p-1];
    }).reduce(sum);

    position += entryCount;
    return [val];
  }
  return getNodeValue(0)[0];
}
// console.log(part2(input));

module.exports = {
  part1: part1,
  part2: part2
};
