/**
 * O(1)
 * O(1) aka constant time, signifies that the execution time   of an algorithm remains constant regardless of the input size
 */

const numbers = [1, 2, 3, 4, 5, 6];

const getElement = (arr, index) => {
  return arr[index];
};

console.log(getElement(numbers, 3)); // 4
