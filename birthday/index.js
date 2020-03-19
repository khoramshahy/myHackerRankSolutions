function birthday(s, d, m) {
    var count = 0;
    for (var i = 0; i <= s.length - m; i++) {
        var segment = 0;
        var sum = 0;
        while (segment < m) {
            sum += s[i + segment];
            segment++;
        }
        if (sum == d) {
            count++;
        }
    }
    return count;
}

birthday([1, 2, 1, 3, 2], 3, 2)