function countZeroes(arr) {
  let n = 0;
  let m = arr.length - 1;
  let midPnt;
  if (arr[0] === 0) {
    return arr.length;
  }

  while (m >= n) {
    midPnt = Math.floor((n + m) / 2);

    if (
      (m - n === 1 && arr[n] === 1 && arr[m] === 0) ||
      (arr[n] === 0 && n === m) ||
      (arr[n] === 1 && n === m)
    ) {
      return arr.length - (n + 1);
    } else if (arr[midPnt] === 1) {
      n = midPnt + 1;
    } else if (arr[midPnt] === 0) {
      m = midPnt - 1;
    }
    console.log(midPnt);
    console.log(n, m);
  }
  return 0;
}
module.exports = countZeroes;
