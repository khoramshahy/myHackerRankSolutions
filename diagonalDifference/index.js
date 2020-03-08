function diagonalDifference(arr) {
    function absolute(value){
        if(value >=0){
            return value
        }
        return -value
    }
    var length = arr.length;
    var primary_diagonal = 0;
    var secondary_diagonal = 0;
    for(var i=0; i< length; i++){
        primary_diagonal += arr[i][i];
        secondary_diagonal += arr[i][length-1-i]
    }
    var result = primary_diagonal - secondary_diagonal;

    return absolute(result)
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])
