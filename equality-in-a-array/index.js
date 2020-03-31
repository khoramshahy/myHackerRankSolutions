function equalizeArray(arr) {
    var len = arr.length;
    var count = {};

    for (let i = 0; i < len; i++) {
        if (count.hasOwnProperty(arr[i])) {
            count[[arr[i]]] += 1;
        } else {
            count[arr[i]] = 1;
        }
    }
    
    var max = Math.max(...Object.values(count))

    return len - max;
}