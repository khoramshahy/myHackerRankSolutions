// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/the-grid-search/problem

/**
 * 
 * @param {a 2D array of digits that we want to look for a pattern in it} G 
 * @param {a given 2D pattern of digits} P 
 */
const gridSearch = (G, P) => {
  const iLimit = G.length - P.length;
  const jLimit = G[0].length - P[0].length;

  /**
   * check if the pattern P is matched in a part of G grid that starts with given i and j
   * @param {first row of G that we want to start the lookin for the match from it} i 
   * @param {first col of G that we want to start the lookin for the match from it} j 
   */
  function matchPattern(i, j) {
    for (let n = 0; n < P.length; n++) {
      for (let m = 0; m < P[0].length; m++) {
        if (P[n][m] !== G[i + n][j + m]) {
          return false;
        }
      }
    }
    return true;
  }

  // find the potential cells to start searching for the pattern
  for (let i = 0; i <= iLimit; i++) {
    for (let j = 0; j <= jLimit; j++) {
      //it is a potential grid to match the P pattern
      if (P[0][0] === G[i][j]) {
        if (matchPattern(i, j)) {
          return 'YES'
        }
      }
    }
  }

  return 'NO'
}

module.exports = gridSearch;
