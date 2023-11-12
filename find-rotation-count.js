function findRotationCount(arr) {
  return findPivot(arr);

  function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;

    if (num >= arr[end]) {
      return arr[end];
    } else if (num < arr[start]) {
      return -1;
    }

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === num) {
        return arr[mid];
      }
      if (arr[mid] > arr[mid + 1]) return mid + 1;
      else if (arr[start] <= arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return 0;
  }
}

module.exports = findRotationCount;
