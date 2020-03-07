function aVeryBigSum(ar) {

    function getMaxLength() {
        var max = 0;
        for (var i = 0; i < ar.length; i++) {
            if (ar[i] > max) {
                max = ar[i];
            }
        }
        return max.toString().length;
    }

    function setNumberToString(num, time) {
        var repeatString = '';
        while (time > 0) {
            repeatString += '0';
        }
        return repeatString + num
    }

    function calculate() {
        var result = '';
        var remain = 0;
        for (var i = maxLength - 1; i >= 0; i--) {
            var digit = 0;
            for (var j = 0; j < ar.length; j++) {
                digit = digit + parseInt(ar[j][i], 10)

            }
            digit += remain;
            remain = digit.toString().length > 1 ? parseInt(digit.toString().slice(0, -1), 10) : 0
            result = digit.toString()[digit.toString().length - 1] + result;
        }
        
        if (remain > 0) {
            result = remain + result;
        }
        return result;
    }

    var maxLength = getMaxLength();

    for (var i = 0; i < ar.length; i++) {
        ar[i] = setNumberToString(ar[i], maxLength - ar[i].toString().length)
    }

    return calculate();

}

aVeryBigSum([100000000001, 100000000002, 100000000003, 100000000004, 1000000005])