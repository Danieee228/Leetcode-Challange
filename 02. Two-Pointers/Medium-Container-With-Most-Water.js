class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;
    while (left < right) {
      const height = Math.min(heights[left], heights[right]);
      const width = right - left;
      const currentArea = height * width;
      maxArea = Math.max(maxArea, currentArea);
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxArea;
  }
}
