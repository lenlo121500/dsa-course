/**
 *
 * 1. Convert number to string
 * 2. Convert string to array
 * 3. Reverse the string
 * 4. Convert array back to string
 * 5. Convert string to number
 * 6. return the number
 */

function reverseInteger(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

console.log(reverseInteger(123));


