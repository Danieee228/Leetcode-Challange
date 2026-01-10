class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let right = numbers.length - 1;
    let left = 0;
    while (left < right) {
      const currentSum = numbers[left] + numbers[right];
      if (currentSum > target) {
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        return [left + 1, right + 1];
      }
    }
    return [];
  }
}
