class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    const seen = new Map();
    for (const char of s1) {
      seen.set(char, (seen.get(char) || 0) + 1);
    }

    let length = s1.length;
    let left = 0;
    for (let right = 0; right < s2.length; right++) {
      const charIn = s2[right];
      if (seen.has(charIn)) {
        seen.set(charIn, seen.get(charIn) - 1);
        if (seen.get(charIn) >= 0) {
          length--;
        }
      }
      if (length === 0) {
        return true;
      }
      if (right - left + 1 >= s1.length) {
        const charOut = s2[left];
        if (seen.has(charOut)) {
          seen.set(charOut, seen.get(charOut) + 1);
          if (seen.get(charOut) > 0) {
            length++;
          }
        }
        left++;
      }
    }
    return false;
  }
}
