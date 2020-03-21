module.exports = function repeater(str, options) {
  const resArr = [];
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;
  separator = separator === undefined ? "+" : separator;
  repeatTimes = repeatTimes === undefined ? 1 : repeatTimes;
  additionRepeatTimes =
    additionRepeatTimes === undefined ? 1 : additionRepeatTimes;

  for (let i = 0; i < repeatTimes; i++) {
    resArr.push(`${str}`);

    for (let j = 0; j < additionRepeatTimes; j++) {
      if (addition !== undefined) resArr.push(`${addition}`);
      if (additionRepeatTimes !== undefined && additionRepeatTimes > j + 1) {
        resArr.push(`${additionSeparator}`);
      }
    }

    if (repeatTimes > i + 1) resArr.push(`${separator}`);
  }
  return resArr.join("");
};
