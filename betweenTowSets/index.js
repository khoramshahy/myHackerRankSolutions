function getTotalX(a, b) {
    var num = a[a.length - 1];
    var count = 0;
    while (num <= b[0]) {
        var isFactorInA = true;
        for (var i = 0; i < a.length; i++) {
            if (num % a[i] != 0) {
                isFactorInA = false;
                break;
            }
        }
        if (isFactorInA) {
            var isFactorInB = true;
            for (var i = 0; i < b.length; i++) {
                if (b[i] % num != 0) {
                    isFactorInB = false;
                    break;
                }
            }
            if (isFactorInB) { count++; }
        }
        num++;
    }
    return count++;

}