function formingMagicSquare(s) {
    
    const poss = [[2, 9, 4, 7, 5, 3, 6, 1, 8],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [6, 7, 2, 1, 5, 9, 8, 3, 4]]

    let minCost = Number.MAX_VALUE;

    //s = s.flat()

    for (let i = 0; i < 8; i++) {
        let sumDiff = 0;

        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                sumDiff += Math.abs(poss[i][j * 3 + k] - s[j][k])
            }
        }

        if (sumDiff < minCost) {
            minCost = sumDiff
        }
    }

    return minCost;

}