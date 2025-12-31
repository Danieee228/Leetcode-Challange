// TODO: use bucket sort to optimize time complexity to O(n)
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const seen = new Map();
    for (const num of nums) {
      if (seen.has(num)) {
        seen.set(num, seen.get(num) + 1);
      } else {
        seen.set(num, 1);
      }
    }
    const seenSort = [...seen.entries()].sort((a, b) => b[1] - a[1]);
    const result = [];
    for (let i = 0; i < k; i++) {
      result.push(seenSort[i][0]);
    }
    return result;
  }

  // -----------clean code version
  topKFrequent(nums, k) {
    const seen = new Map();
    for (const num of nums) {
      seen.set(num, (seen.get(num) || 0) + 1);
    }
    const seenSort = [...seen.entries()].sort((a, b) => b[1] - a[1]);
    const result = seenSort.slice(0, k).map((entry) => entry[0]);

    return result;
  }
}
