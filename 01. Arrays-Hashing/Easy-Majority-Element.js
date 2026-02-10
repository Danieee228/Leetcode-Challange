class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  majorityElement(nums) {
    const seen = new Map();
    let res = 0;
    let maxCount = 0;
    for (let num of nums) {
      seen.set(num, (seen.get(num) || 0) + 1);
      if (seen.get(num) > maxCount) {
        res = num;
        maxCount = seen.get(num);
      }
    }
    return res;
  }
}
