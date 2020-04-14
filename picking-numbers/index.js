// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    var max = 0;
    var len = a.length;
    var count = Array(len + 2).fill(0);

    for (let i = 0; i < len; i++) {
        let val = a[i];
        //start filling the count array from index= 1 until index=length-1 
        //for the situation that the frist or last nums have the max count solely
        count[val + 1]++
        let sumPrev = count[val] + count[val + 1];
        let sumNext = count[val + 1] + count[val + 2];

        if (sumPrev > max) {
            max = sumPrev
        }

        if (sumNext > max) {
            max = sumNext
        }
    }

    return max;
}