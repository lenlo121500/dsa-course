function reverseString1(str) {
  return str.split("").reverse().join("");
}

// using for loop
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello"));
console.log(reverseString1("world"));
