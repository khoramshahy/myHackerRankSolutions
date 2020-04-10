// link of challenge description in hackerrank.com:
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const len = word.length;

    var maxLetterH = 1;

    for(let i=0; i<len; i++){
        let index = alphabet.indexOf(word[i]);
        if(h[index]> maxLetterH){
            maxLetterH = h[index];
        }
    }

    return len * maxLetterH;

}
