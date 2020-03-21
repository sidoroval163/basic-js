module.exports = function countCats(backyard) {
  let number = 0;
  if (backyard.length == 0) {
    return 0;
  } else {
    for (var x = 0; x < backyard.length; x++) {
      for (var j = 0; j < backyard[x].length; j++) {
        if (backyard[x][j] == "^^") {
          number++;
        }
      }
    }
    return number;
  }
};
