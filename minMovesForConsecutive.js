function minMoves(s) {
  let count = 0;
  const n = s.length;

  for (let i = 0; i < n; ) {
    let next = i + 1;
    if (s[i] == s[next]) {
      while (s[i] == s[next] && next < n) {
        next++;
      }
    }

    count += Math.floor((next - i) / 3);
    i = next;
  }

  return count;
}

console.log(minMoves("baaaaa"));
console.log(minMoves("baaabbaabbba"));
console.log(minMoves("baabab"));
