
// TODO: Refactor loop
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const group = new Map();
    for (let i = 0; i < strs.length; i++) {
      const count = new Array(26).fill(0);
      for (const char of strs[i]) {
        const index = char.charCodeAt(0) - "a".charCodeAt(0);
        count[index]++;
      }
      const key = count.toString();
      if (group.has(key)) {
        group.get(key).push(strs[i]);
      } else {
        group.set(key, [strs[i]]);
      }
    }
    return Array.from(group.values());
  }
}
