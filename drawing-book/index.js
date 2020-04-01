/*
    link of challenge description in hackerrank.com:
    https://www.hackerrank.com/challenges/drawing-book/problem
*/
function pageCount(n, p) {
    var front = 0;
    var back = 0;

    function countTurn(page, pageStartFromRight) {
        let turn = 0
        if (pageStartFromRight) {
            turn = Math.floor(page / 2);
        } else {
            turn = (Math.floor((page + 1) / 2) - 1)
        }

        return turn;
    }

    front = countTurn(p, true);
    //imagin that book starts from end  
    back = countTurn(n - p + 1, n % 2 == 0)

    return front <= back ? front : back;
}
// for better implementation we can instead of calculation both turns from front and back
//  and then camparing them, at first determine that start turning from front is better or from back
function pageCount(n, p) {
    var count = 0;

    function countTurn(page, pageStartFromRight) {
        let turn = 0
        if (pageStartFromRight) {
            turn = Math.floor(page / 2);
        } else {
            turn = (Math.floor((page + 1) / 2) - 1)
        }

        return turn;
    }

    //start from front
    if (p > Map.floor(n / 2)) {
        count = countTurn(p, true);
    }
    //start from back
    else {
        count = countTurn(n - p + 1, n % 2 == 0)
    }

    return count
}
// and at the end by discovering the relation between n and p,
//  we can simplify our algorithm
function pageCount(n, p) {
    var front = Math.floor(p/2);
    var back = Math.floor(n/2) - front;

    return front <= back ? front : back; 
}