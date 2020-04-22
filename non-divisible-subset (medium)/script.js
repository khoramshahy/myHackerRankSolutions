//approach one
function nonDivisibleSubset1(k, s) {
    // Write your code here
    s = s.split(' ').map(x => parseInt(x))
    var len = s.length;
    var badSets = [];
    var potentialBadNums = [];
    var potentialBadNumsCount = [];
    var numsToDelete = [];

    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if ((s[i] + s[j]) % k == 0) {
                badSets.push([s[i], s[j]])
                addToPotentialBadNums(s[i]);
                addToPotentialBadNums(s[j]);
            }
        }
    }

    while (badSets.length > 0) {
        let max = Math.max(...potentialBadNumsCount);
        let maxIndex = potentialBadNumsCount.indexOf(max);
        let maxNum = potentialBadNums[maxIndex]
        var temp = [];

        for (var k = 0; k < badSets.length; k++) {
            if (badSets[k].indexOf(maxNum) === -1) {
                temp.push(badSets[k]);
            }
        }
        if (temp.length < badSets.length) {
            numsToDelete.push(maxNum);
        }
        badSets = temp;

        potentialBadNums.splice(maxIndex, 1);
        potentialBadNumsCount.splice(maxIndex, 1);
    }

    function addToPotentialBadNums(num) {
        var index = potentialBadNums.indexOf(num);
        if (index > -1) {
            potentialBadNumsCount[index]++;
            return
        }
        potentialBadNums.push(num);
        potentialBadNumsCount.push(1);
    }

    return len - numsToDelete.length;

}
//approach tow
function nonDivisibleSubset2(k, s) {
    var count =0;
    var remind = new Array(k).fill(0);
    for (var i=0; i< s.length; i++){
        remind[s[i] % k]++        
    }

    count += Math.min(remind[0], 1);
    var isEven = k % 2 == 0;
    var mid = isEven ? Math.floor(k / 2) - 1 : Math.floor(k / 2) ;

    for(var j=1; j<=mid; j++){
        count += Math.max(remind[i], remind[k -i])
    }

    if(isEven){
        count += Math.min(remind[mid + 1], 1)
    }

    return count;

}




