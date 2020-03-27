function jumpingOnClouds(c) {
    var steps = 0;
    var current = 0;
    while(current<c.length-1){
        if(c[current+2] == 0){
            current+=2
        } else{
            current++;
        }
        steps++;
    }
    return steps;
}