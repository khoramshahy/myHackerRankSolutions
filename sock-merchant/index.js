function sockMerchant(n, ar) {
    var temp = [ar[0]];
    var count = 0;
    for(var i=1; i<n; i++){
        var index = temp.indexOf(ar[i]);
        if(index===-1){
            temp.push(ar[i])
        } else{
            count++;
            temp.splice(index, 1)
        }
    }
    
    return count;
}