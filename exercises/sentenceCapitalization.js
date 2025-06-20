/**
 * 1. Make the string lowercase
 * 2. Convert string to array
 * 3. Capitalize each word
 * 4. Convert array back to string
 */

function sentenceCapitalization(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(sentenceCapitalization("hello world"));

// using loop
function sentenceCapitalization1(str) {
  let result = "";
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
  }
  return result.trim();
}

console.log(sentenceCapitalization1("hello world"));
