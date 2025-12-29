class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
// Using hash map
  twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;
      if (seen.has(complement)) {
        return [i, seen.get(complement)];
      }
      seen.set(currentNum, i);
    }
  }
}
