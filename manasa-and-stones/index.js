// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/manasa-and-stones/problem

function stones(n, a, b) {
    var poss = [0]

    while (n > 1) {
        var temp = [];
        for (var i = 0; i < poss.length; i++) {
            temp.push(poss[i] + a);
            temp.push(poss[i] + b);
        }
        poss = Array.from(new Set(temp));
        n--;
    }

    poss = poss.sort((a, b) => a - b)
    return poss;
}
