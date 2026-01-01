// TODO: Refactor the code to improve its readability and efficiency

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (const str of strs) {
      let length = str.length;
      res += length + "#" + str;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] != "#") {
        j += 1;
      }
      let length = parseInt(str.slice(i, j));
      res.push(str.slice(j + 1, j + 1 + length));
      i = j + 1 + length;
    }
    return res;
  }
}
