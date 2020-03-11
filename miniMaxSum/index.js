function miniMaxSum(arr) {
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    var length = arr.length;
    var sum = 0;

    for (var i = 0; i < length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    console.log(sum - max, sum - min);
}

miniMaxSum([769082435, 210437958, 673982045, 375809214, 380564127])