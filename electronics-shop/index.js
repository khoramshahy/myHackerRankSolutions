function getMoneySpent(keyboards, drives, b) {
    var max = -1;
    for(var i=0; i<keyboards.length; i++){
        for(var j=0; j<drives.length; j++){
            var sum = keyboards[i]+drives[j];
            if(sum>max && sum<=b){
                max = sum
            }
        }
    }
    return max;
}