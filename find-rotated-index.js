function findRotatedIndex(arr, num) {
  let pivot = findPivot(arr);
  console.log(pivot);

  if (arr[0] !== num && arr.length === 1) {
    return -1;
  } else if (arr[0] === num) {
    return 0;
  }

  if (num < arr[0]) {
    return binarySearch(arr, num, pivot + 1, arr.length - 1);
  } else {
    return binarySearch(arr, num, 0, pivot - 1);
  }

  function binarySearch(arr, num, start, end) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === num) {
        return mid;
      } else if (arr[mid] < num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }

  function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] > arr[mid + 1]) return mid + 1;
      else if (arr[start] <= arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
}

module.exports = findRotatedIndex;
