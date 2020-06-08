// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/cavity-map/problem


/**
 * 
 * @param {a square grid} grid 
 */
const cavityMap = (grid) => {
  let newGrid = [...grid];
  /**
   * check if this cell is a cavity or not
   * @param {int: potential cavity row index} x 
   * @param {int: potential cavity col index} y 
   * @returns{boolean}
   */
  function isCavity(x, y) {
    debugger
    const val = grid[x][y];
    const up = grid[x - 1][y] < val;
    const down = grid[x + 1][y] < val;
    const left = grid[x][y - 1] < val;
    const right = grid[x][y + 1] < val;

    const match = up && down && left && right;

    return match;
  }

  //check all cells except ones that are on the border of the map
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (isCavity(i, j)) {
        //replace cavity cell character with 'X'
        newGrid[i] = newGrid[i].substr(0, j) + 'X' + newGrid[i].substr(j + 1, newGrid[i].length)
      }
    }
  }

  return newGrid
}

module.exports = cavityMap;

