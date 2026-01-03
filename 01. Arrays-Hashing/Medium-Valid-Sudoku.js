class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const cols = new Array();
    for (let i = 0; i < 9; i++) {
      cols.push(new Set());
    }
    const rows = new Array();
    for (let i = 0; i < 9; i++) {
      rows.push(new Set());
    }
    const boxes = new Array();
    for (let i = 0; i < 9; i++) {
      boxes.push(new Set());
    }
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const value = board[r][c];
        if (value === ".") {
          continue;
        }
        const boxId = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (cols[c].has(value) || rows[r].has(value) || boxes[boxId].has(value)) {
          return false;
        }
        rows[r].add(value);
        cols[c].add(value);
        boxes[boxId].add(value);
      }
    }
    return true;
  }
}
