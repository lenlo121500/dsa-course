// O(2)
// - indicates that the algorithm's execution time grows quadratically with the size of the input data (represented by n)

function findPairs(arr) {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: (${arr[i]}, ${arr[j]})`);
    }
  }

  // O(n)
  for (let k = 0; k < arr.length; k++) {
    console.log("Element:", k);
  }
}

const numbers = [1, 2, 3, 4, 5, 6];

findPairs(numbers);

/**
 *  IMPORTANT NOTE:
 *  - If we combine all the "O" operations it becomes O(n^2 + n),
 *  - which is O(n^2) is a dominant-term
 *  - "n" is a non-dominant term
 *  - so we remove the "non-dominant" term and we're only left with "O(n^2)"
 *  - this way we simplify the bigO notation
 */
