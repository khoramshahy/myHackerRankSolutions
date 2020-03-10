function staircase(n) {
    var x = 1;
    function printLine(x){
        console.log(' '.repeat(n-x)+ '#'.repeat(x))
    }
    while(x <= n){
        printLine(x)
        x++;        
    }
}
staircase(6);