// Function to compress a string by replacing consecutive characters with the character followed by the count of its occurrences

function compressString(str) {
  if (!str) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  // Add the last character group
  result += str[str.length - 1] + count;

  return result;
}

console.log(compressString("aaabbccaa"));  // Output: "a3b2c2a2"
