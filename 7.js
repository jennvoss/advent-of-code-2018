const input = require('./7-input.json');
const getSteps = (arr) => {
  const regex = / [A-Z] /g;
  let steps = {}
  let sorted = {};

  arr.forEach(str => {
    let [l1, l2] = str.match(regex).map(l => l.trim());
    if (!steps[l1]) {steps[l1] = []}
    steps[l2] = [...(steps[l2] || []), l1];
  });

  Object.keys(steps).sort().forEach(k => sorted[k] = steps[k].sort());
  return sorted;
}

function part1(arr) {
  let sorted = getSteps(arr);
  let completed = [];
  while (Object.keys(sorted).length) {
    Object.keys(sorted).some(k => {
      if (sorted[k].every(i => completed.indexOf(i) >= 0)) {
        delete sorted[k];
        return completed.push(k);
      }
    });
  }
  return completed.join('');
}
// console.log(part1(input));

function part2(arr, numWorkers, stepDuration) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sorted = getSteps(arr);
  let completed = [];
  let total = 0;
  const defaultWorker = {letter: '', time: 0};
  let workers = Array.from(Array(numWorkers), () => defaultWorker);
  const time = (k) => stepDuration + letters.indexOf(k) + 1;
  const completeTask = (l) => {completed.push(l); delete sorted[l];};

  const addTime = (workers) => {
    const lowest = workers.filter(a => a.time > 0).sort((a, b) => a.time - b.time)[0];
    if (!lowest) return;
    total += lowest.time;
    completeTask(lowest.letter);
    workers[workers.findIndex(i => i.letter === lowest.letter)] = defaultWorker;
    workers.forEach(w => {
      if (w.time > 0) { w.time -= lowest.time; }
      if (w.time <= 0) {
        completeTask(w.letter);
        w = defaultWorker;
      }
    });
  };

  while (Object.keys(sorted).length) {
    let next = Object.keys(sorted).filter(k => !sorted[k].inProgress).filter(k => {
      return sorted[k].every(i => completed.indexOf(i) >= 0)
    });

    next.forEach(k => {
      let available = workers.findIndex(i => i.time <= 0);
      if (available >= 0) {
        sorted[k].inProgress = true;
        workers[available] = {letter: k, time: time(k)};
      }
    });
    addTime(workers);
  }
  workers = workers.sort((a, b) => b.time - a.time).forEach(() => addTime(workers));
  return total;
}
// console.log(part2(input, 5, 60));

module.exports = {
  part1: part1,
  part2: part2
};
