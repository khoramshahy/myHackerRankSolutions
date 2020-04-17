// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(s, t, k) {
    var commonLetter = 0;
    var sLen = s.length;
    var tLen = t.length;
    var len = sLen < tLen ? sLen : tLen
    var op = 0;
    var i = 0;

    for (; i < len; i++) {
        if (s[i] !== t[i]) {
            break;
        }
    }
    commonLetter = i;

    // remove operations + add operations
    op = (sLen - commonLetter) + (tLen - commonLetter);

    if (op == k) {
        return 'Yes'
    }
    if (op > k) {
        return 'No'
    }
    //add a char and remove it(even op) ||
    //fully empty s (use remove on empty s)and then full it with t(odd op)
    if ((k - op) % 2 == 0 || sLen + tLen < k) {
        return 'Yes'
    }

    return 'No'

}