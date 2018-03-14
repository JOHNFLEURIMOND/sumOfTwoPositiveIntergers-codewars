function sumTwoSmallestNumbers(numbers) {
  var minNums = [numbers[0], numbers[1]].sort(function(x, y) {
    return x - y
  });
  var len = numbers.length;
  for (i = 2; i < len; i++) {
    var num = numbers[i];
    if (num < minNums[0]) {
      minNums = [num, minNums[0]];
    } else if (num < minNums[1]) {
      minNums[1] = num;
    }
  }
  return minNums[0] + minNums[1];
};