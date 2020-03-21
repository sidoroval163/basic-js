module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  let month = date.getMonth();
  if (month === undefined) {
    throw Error;
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw Error;
  } else {
    if (month == 11 || month == 0 || month == 1) {
      return "winter";
    } else if (month == 2 || month == 3 || month == 4) {
      return "spring";
    } else if (month == 5 || month == 6 || month == 7) {
      return "summer";
    } else if (month == 8 || month == 9 || month == 10) {
      return "autumn";
    }
  }
};
