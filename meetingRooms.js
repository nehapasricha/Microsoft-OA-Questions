function meeting(intervals) {
  const start = intervals.sort((a, b) => a[0] - b[0]);
  const end = [...intervals].sort((a, b) => a[1] - b[1]);

  let rooms = 0;
  let j = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (start[i][0] < end[j][1]) {
      rooms++;
    } else {
      j++;
    }
  }

  return rooms;
}

console.log(
  meeting([
    [0, 4],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  meeting([
    [7, 10],
    [2, 4],
    [15, 20],
    [5, 10],
    [0, 30],
  ])
);
