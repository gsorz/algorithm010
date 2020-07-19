/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let rowLenth = grid.length;
  let colLength = grid[0].length;
  for (let i = rowLenth - 1; i >= 0; i--) {
    for (let j = colLength - 1; j >= 0; j--) {
      if (i == rowLenth - 1 && j != colLength - 1) {
        grid[i][j] = grid[i][j] + grid[i][j + 1];
      } else if (j == colLength - 1 && i != rowLenth - 1) {
        grid[i][j] = grid[i][j] + grid[i + 1][j];
      } else if (i != rowLenth - 1 && j != colLength - 1) {
        grid[i][j] = grid[i][j] + Math.min(grid[i + 1][j], grid[i][j + 1]);
      } else {
      }
    }
  }
  return grid[0][0];
};
