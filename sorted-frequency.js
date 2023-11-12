function sortedFrequency(arr, num) {
  function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1;

    while (left <= right) {
      let midPnt = Math.floor((left + right) / 2);
      if (arr[midPnt] === num) {
        firstIndex = midPnt;
        right = midPnt - 1;
      } else if (arr[midPnt] > num) {
        right = midPnt - 1;
      } else {
        left = midPnt + 1;
      }
    }
    return firstIndex;
  }

  function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;

    while (left <= right) {
      let midPnt = Math.floor((left + right) / 2);
      if (arr[midPnt] === num) {
        lastIndex = midPnt;
        left = midPnt + 1;
      } else if (arr[midPnt] > num) {
        right = midPnt - 1;
      } else {
        left = midPnt + 1;
      }
    }
    return lastIndex;
  }
  const firstIndex = findFirst(arr, num);
  const lastIndex = findLast(arr, num);

  return lastIndex - firstIndex + 1;
}

module.exports = sortedFrequency;
