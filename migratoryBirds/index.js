function migratoryBirds(arr) {
    var max = 0;
    var types = [0, 0, 0, 0, 0]
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i] - 1;
        types[index]++;
    }
    for (var i = 0; i < 5; i++) {
        if(types[i]>types[max]){
            max = i;
        }
    }

    return max + 1
}