function largestAlpha(str) {
  const charMap = {};
  let max = 0;
  let maxChar;

  for (let char of str) {
    const code = char.charCodeAt(0);

    if (code >= 97 && code <= 127) {
      charMap[char.toUpperCase()] = true;
    }
  }

  for (let char of str) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90 && charMap[char] && code > max) {
      max = code;
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(largestAlpha("abcdDFCG"));
console.log(largestAlpha("wWxXcC"));
console.log(largestAlpha("abcAcf"));
