// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/taum-and-bday/problem

function taumBday(b, w, bc, wc, z) {
    
    [b, w, bc, wc, z] = [...arguments].map(x => BigInt(x));

    if(bc - wc > z){
        return b * (wc + z) + w * wc
    }

    if(wc - bc > z){
        return w * (bc + z) + b * bc
    }

    return b * bc + w * wc;
    
}