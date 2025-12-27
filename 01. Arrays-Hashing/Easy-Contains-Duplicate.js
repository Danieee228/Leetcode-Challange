class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      } else {
        seen.add(num);
      }
    }
    return false;
  }
}

// ------------clean code version
// var containsDuplicate = function (nums) {
//   const seen = new Set(nums);
//   return seen.size !== nums.length;
// };
