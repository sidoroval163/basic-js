module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = turns / (turnsSpeed / 3600);
  let res = { turns, seconds };
  return res;
};
