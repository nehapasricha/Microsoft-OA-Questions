//Max integer with inserting 5
const solution = (num) => {
  const isNegativeNum = num < 0;
  const numStr = Math.abs(num).toString();
  const permutations = [];

  for (let i = 0; i <= numStr.length; i++) {
    const permutation = Number(numStr.substr(0, i) + "5" + numStr.substr(i));
    permutations.push(permutation);
  }

  return isNegativeNum
    ? Math.min(...permutations) * -1
    : Math.max(...permutations);
};

console.log(solution(123));
console.log(solution(-521));
console.log(solution(-123));
console.log(solution(521));
console.log(solution(613));
