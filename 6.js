const input = require('./6-input.json');
const testInput = ['1, 1','1, 6','8, 3','3, 4','5, 5','8, 9'];

const manhattanDist = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const getClosestPoint = (arr, point) => {
  let distances = {};
  arr.forEach((input) => distances[input] = manhattanDist(input, point));

  let duplicates = [];
  let closest = Object.keys(distances).reduce((key1, key2) => {
    if (distances[key1] === distances[key2]) { duplicates.push(key1, key2) }
    return distances[key1] < distances[key2] ? key1 : key2;
  });
  return duplicates.indexOf(closest) >= 0 ? '.' : closest;
};

function part1(arr) {
  const points = arr.map(p => p.split(', '));
  let xLow, xHigh, yLow, yHigh;
  let grid = {};
  const onEdge = (x, y) => x === xLow || x === xHigh || y === yLow || y === yHigh;

  points.reduce(([a, b], [x, y]) => {
    xLow = Math.min(xLow || a, x);
    xHigh = Math.max(xHigh || a, x);
    yLow = Math.min(yLow || b, y);
    yHigh = Math.max(yHigh || b, y);
    return [x, y];
  });

  for (let y = yLow; y <= yHigh; y++) {
    for (let x = xLow; x <= xHigh; x++) {
      if (!onEdge(x,y)) {
        grid[`${x}-${y}`] = getClosestPoint(points, [x, y]);
      }
    }
  }

  let totals = {};
  Object.keys(grid).forEach(point => totals[grid[point]] = ++totals[grid[point]] || 1);
  return Object.values(totals).sort((a, b) => a - b).pop();
}
// console.log(part1(input));

// function part2() {
// }
// console.log(part2(input));

module.exports = {
  part1: part1,
  // part2: part2
};
