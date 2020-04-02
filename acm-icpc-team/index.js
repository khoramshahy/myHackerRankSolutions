// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/acm-icpc-team/problem
function acmTeam(topic) {
    var max = 0;
    var maxCount = 1;
    var len = topic.length;
    var strLen = topic[0].length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {

            let count = 0;
            for (let k = 0; k < strLen; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    count++;
                }
            }
            if (count == max) {
                maxCount++;
            }
            else if (count > max) {
                max = count;
                maxCount = 1;
            }

        }
    }

    return [max, maxCount]
}

acmTeam(['10101','11100','11010','00101'])