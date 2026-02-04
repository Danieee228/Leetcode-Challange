class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let pair = position.map((p, i) => [p, speed[i]]);
    pair.sort((a, b) => b[0] - a[0]);
    let stack = [];
    for (let [p, s] of pair) {
      let currentTime = (target - p) / s;
      if (stack.length === 0 || currentTime > stack[stack.length - 1]) {
        stack.push(currentTime);
      }
    }
    return stack.length;
  }
}
