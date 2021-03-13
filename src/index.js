module.exports = function reverse (n) {

    let posN;
    let posNrev;
    if(n < 0) {
        posN = Math.abs(n);
        posNrev = String(posN).split('').reverse().join('');
        return +posNrev;
    } else {
        let nSplit = String(n).split('').reverse().join('');
        return +nSplit;
    }

}
