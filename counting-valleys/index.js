function countingValleys(n, s) {
    var level = 0;
    var valley = 0;
    for(var i=0; i<n; i++){
        if(s[i]=='U'){
            level++;
        } else {
            if(level == 0){
                valley++;
            }
            level--;
        }
    }

    return valley;
}