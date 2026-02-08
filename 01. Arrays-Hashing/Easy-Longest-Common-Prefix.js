class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  longestCommonPrefix(strs) {
    for (let i = 0; i < strs[0].length; i++) {
      for (let str of strs) {
        if (i === str.length || strs[0][i] !== str[i]) {
          return str.slice(0, i);
        }
      }
    }
    return strs[0];
  }
}
