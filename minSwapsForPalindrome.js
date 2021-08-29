//Minimum Adjacent Swaps to Make Palindrome

var minSwaps = function (s) {
  const chapMap = {};

  for (let char of s) {
    chapMap[char] ? (chapMap[char] += 1) : (chapMap[char] = 1);
  }

  if (!checkIfValid(Object.values(chapMap), s.length)) return -1;

  const n = s.length;

  const arr = s.split("");
  let count = 0;
  let answer = false;
  for (let i = 0; i < n / 2; i++) {
    const left = i;
    let right = n - left - 1;

    while (left < right) {
      if (arr[left] === arr[right]) {
        answer = true;
        break;
      } else {
        right--;
      }
    }
    console.log(answer);
    console.log(right);
    if (left === right) {
      break;
    } else {
      for (let j = right; j < n - left - 1; j++) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        count++;
      }
    }
  }
  return answer ? count : -1;
};

function checkIfValid(arr, n) {
  if (n % 2 === 0) {
    return arr.every((val) => val % 2 === 0);
  } else {
    const filteredArr = arr.filter((val) => val % 2 === 1);

    return filteredArr.length === 1;
  }
}

// console.log(minSwaps('niitn'));
console.log(minSwaps("mamad"));
// console.log(minSwaps('asflkj'));
// console.log(minSwaps('aabb'));
// console.log(minSwaps('niitn'));
