// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
    var count = 0;

    for (let x = i; x <= j; x++) {
        let rev = parseInt(x.toString().split('').reverse().join(''), 10);
        if ((x - rev) % k == 0) {
            count++;
        }
    }

    return count;
}