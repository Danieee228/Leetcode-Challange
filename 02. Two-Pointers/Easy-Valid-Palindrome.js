class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (!this.alphaNum(s[left])) {
        left++;
        continue;
      }
      if (!this.alphaNum(s[right])) {
        right--;
        continue;
      }
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  alphaNum(char) {
    return (
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
    );
  }
}
