function palindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(palindrome("racecar"));

// using loop
function palindrome1(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
}

console.log(palindrome1("racecar"));
