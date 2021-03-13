module.exports = function reverse (n) {

    if(n < 0) {
        let posN = Math.abs(n);
        let posNrev = String(posN).split('').reverse().join('');
        return +posNrev;
    } else {
        let nSplit = String(n).split('').reverse().join('');
        return +nSplit;
    }

}
