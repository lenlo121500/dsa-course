// O(log n)
// - time complexity refers to an algorithm's runtime that grows logarithmically with the size of the input (represent by n). In simpler terms, as the input size increases, the time it takes for the algorithm ro run increases slowly.

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found target at index mid
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
};

const numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 7)); // Output: 3
