// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/cut-the-sticks/problem
function cutTheSticks(arr) {
    var stickCount = [];

    function removeMinSticks(array) {
        if (array.length == 0) {
            return stickCount;
        }

        stickCount.push(array.length)
        var min = Math.min(...array);
        var newArr = array.filter(x => x > min).map(y => y - min);

        return removeMinSticks(newArr)
    }

    return removeMinSticks(arr)
}