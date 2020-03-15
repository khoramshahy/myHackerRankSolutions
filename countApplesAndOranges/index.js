function countApplesAndOranges(s, t, a, b, apples, oranges) {
    function numInRange(x, arr) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            var r = arr[i] + x;
            if (r >= s && r <= t) {
                count++;
            }
        }
        return count;
    }
    console.log(numInRange(a, apples))
    console.log(numInRange(b, oranges))
}

countApplesAndOranges(7, 10, 5, 14, [5, -2, 1], [3, 1, -4])