const input = require('./4-input.json');

const sortByDate = (arr) => {
  const items = {};
  arr.forEach((el) => {
    const dateTime = el.split('[')[1].split(']')[0];
    const text = el.split(']')[1].trim();
    items[dateTime] = text;
  });

  const dates = {};
  Object.keys(items)
    .sort((a, b) => new Date(a) - new Date(b))
    .forEach(key => dates[key] = items[key]);
  return dates;
};

const logMinutes = (minutes, start, end) => {
  for (let i = start.getMinutes(); i < end.getMinutes(); i++) {
    minutes[i] = (minutes[i] || 0) + 1;
  }
  return minutes;
};

const getSleepiest = guards => {
  return Object.keys(guards).sort((a, b) => {
    return guards[a].timeAsleep - guards[b].timeAsleep
  }).pop();
};

const sleepiestMin = minutes => {
  return Object.keys(minutes).sort((a, b) => minutes[a] - minutes[b]).pop();
};

function part1(arr) {
  const dates = sortByDate(arr);
  let guards = {};
  let guardNumber;

  Object.keys(dates).reduce((a, b) => {
    if (dates[a].indexOf('Guard') >= 0) {
      guardNumber = dates[a].split('#')[1].split(' ')[0];
    }

    if (dates[a] === 'falls asleep' && dates[b] === 'wakes up') {
      if (!guards[guardNumber]) {guards[guardNumber] = {}};
      const start = new Date(a);
      const end = new Date(b);

      let diff = end - start;
      let prevTimeAsleep = guards[guardNumber].timeAsleep || 0;
      guards[guardNumber].timeAsleep = prevTimeAsleep + Math.floor(diff / 1000 / 60);

      let prevMinutes = guards[guardNumber].minutes || {};
      guards[guardNumber].minutes = logMinutes(prevMinutes, start, end);
    }
    return b;
  });

  const sleepiestGuard = getSleepiest(guards);
  return sleepiestGuard * sleepiestMin(guards[sleepiestGuard].minutes);
}
// console.log(part1(input));

module.exports = {
  part1: part1
};
