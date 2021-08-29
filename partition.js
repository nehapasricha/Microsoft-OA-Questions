// Partition array into N subsets with balanced sum

function balance(arr, n) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  const avg = sum / n;
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push(getBucket(arr, avg));
  }

  return results;
}

function getBucket(arr, avg) {
  const last = arr.pop();
  const current = [last];
  let sum = last;

  let i = arr.length - 1;
  while (sum <= avg && i >= 0) {
    if (sum + arr[i] <= avg) {
      current.push(arr[i]);
      sum += arr[i];
      arr.splice(i, 1);
    }
    i--;
  }

  return current;
}

console.log(balance([1, 2, 3, 4, 5], 3));
console.log(balance([2, 9, 9, 10, 10], 2));
console.log(balance([1, 2, 2, 3, 3, 5], 4));
