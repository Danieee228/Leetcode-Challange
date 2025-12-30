// Using hash map
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  } else {
    const seen = new Map();
    for (const char of s) {
      seen.set(char, (seen.get(char) || 0) + 1);
    }
    for (const char of t) {
      if (!seen.get(char)) {
        return false;
      } else {
        seen.set(char, (seen.get(char) || 0) - 1);
      }
    }
    return true;
  }
};

// Using array as hash map
// Option 2
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    const count = new Array(26).fill(0);
    for (const char of s) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      count[index]++;
    }
    for (const char of t) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      count[index]--;
    }
    for (const val of count) {
      if (val !== 0) {
        return false;
      }
    }
    return true;
  }
}
