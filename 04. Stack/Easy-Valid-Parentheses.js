class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    const stack = [];
    for (const char of s) {
      if (map[char]) {
        if (stack.pop() !== map[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  }
}
