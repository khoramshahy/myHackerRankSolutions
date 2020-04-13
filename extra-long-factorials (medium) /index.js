// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {

    function factorial(x){
        if(x == 1){
            return 1n
        }
        return x * factorial(x - 1n)
    }
    
    console.log(factorial(BigInt(n)).toString())

}