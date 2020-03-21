module.exports = class DepthCalculator {
  calculateDepth(arr, depth) {
    var a;
    if (depth == undefined) {
      depth = 1;
    }
    a = depth;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        a = Math.max(this.calculateDepth(arr[i], depth + 1), a);
      }
    }
    return a;
  }
};
