function climbingLeaderboard(scores, alice, expected) {

    var rankArr = [];
    scores = [...new Set(scores)];

    function searchBinary(val, start = 0, end = scores.length - 1) {
        var mid = start + Math.floor((end - start) / 2);
        if (scores[mid] == val) {
            //its score is same with some other
            return mid + 1
        }
        if (mid == 0 && val > scores[mid]) {
            //its rank is first
            return 1
        }
        if (start == end) {
            //its score isn't in the score list and its rank is after mid
            return mid + 1 + 1
        }
        if (scores[mid] > val) {
            start = mid + 1
            if (scores[start] < val) {
                //its score isn't in the score list and its rank is after mid
                return start + 1
            }
        } else {
            end = mid - 1;
        }
        return searchBinary(val, start, end)

    }

    for (var i = 0; i < alice.length; i++) {
        const rank = searchBinary(alice[i])
        rankArr.push(rank)
    }

    return rankArr;
}