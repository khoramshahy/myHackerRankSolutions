// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
    var result = [];
    var len = a.length
    
    for(var i=0; i< queries.length; i++){
        //rotate back from new index to old index before start rotating
        let index = (queries[i] + len - (k % len)) % len;
        result.push(a[index])
    }

    return result;
}



