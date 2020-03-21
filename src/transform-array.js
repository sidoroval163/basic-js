const transform = arr => {
  if (!Array.isArray(arr)) throw new Error();
  const commands = [
    "--discard-prev",
    "--discard-next",
    "--double-next",
    "--double-prev"
  ];
  if (!arr.some(elem => commands.includes(elem))) return arr;

  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        resultArray.pop();
        break;
      case "--discard-next":
        i++;
        break;
      case "--double-next":
        resultArray.push(arr[i + 1]);
        break;
      case "--double-prev":
        resultArray.push(arr[i - 1]);
        break;
      default:
        resultArray.push(arr[i]);
    }
  }

  return resultArray.filter(item => item !== undefined);
};

module.exports = transform;
