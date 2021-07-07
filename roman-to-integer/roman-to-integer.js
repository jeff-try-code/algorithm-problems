/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let res = 0
    
    for (let i = s.length - 1; i >= 0; i--) {
        let curr = roman[s[i]]
        let prev = i + 1 >= s.length ? null : roman[s[i + 1]]    
        res = prev != null && curr < prev ? res - curr : res + curr;
    }
    return res
};