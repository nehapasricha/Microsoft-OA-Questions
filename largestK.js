function largestK(nums) {
  // WRITE YOUR BRILLIANT CODE HERE

  nums = nums.sort((a, b) => b - a);
  const n = nums.length;

  let max = 0;

  let l = 0;
  let r = n - 1;

  console.log(nums);
  while (l <= r) {
    if (nums[r] > 0) return 0;

    if (nums[l] === -1 * nums[r]) {
      max = nums[l];
      break;
    } else if (nums[l] < -1 * nums[r]) {
      r--;
    } else if (nums[l] > -1 * nums[r]) {
      l++;
    }
  }

  return max;
}

console.log(largestK([3, 2, -2, 5, -3]));
