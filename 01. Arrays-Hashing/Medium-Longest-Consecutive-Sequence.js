/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let maxStreak = 0;
  const seen = new Set(nums);
  for (const num of seen) {
    if (seen.has(num - 1)) {
      continue;
    }
    let currentNum = num;
    let currentStreak = 1;
    while (seen.has(currentNum + 1)) {
      currentStreak++;
      currentNum += 1;
    }
    maxStreak = Math.max(maxStreak, currentStreak);
  }
  return maxStreak;
};
