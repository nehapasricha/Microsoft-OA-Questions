//Lexicographically Smallest String

function smallestString(s) {
  let i = 0;
  for (; i < s.length - 1; i++) {
    if (s[i] > s[i + 1]) {
      break;
    }
  }
  return s.substr(0, i) + s.substr(i + 1, s.length);
}

console.log(smallestString("abcd"));
console.log(smallestString("abzc"));
console.log(smallestString("abda"));
