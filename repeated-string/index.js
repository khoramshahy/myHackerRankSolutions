// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/repeated-string/problem
function repeatedString(s, n) {
    function findMatch(str) {
        return (str.match(/a/gi) || []).length;
    }
    var match = findMatch(s);
    if (match === 0) {
        return 0;
    }
    const len = s.length;
    var count = Math.floor(n / len) * match;
    if (n % len !== 0) {
        let subStr = s.slice(0, n % len);
        count += findMatch(subStr)
    }

    return count;
}