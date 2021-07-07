/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    memo = {}
    for (const str of strs) {
        for (let i = str.length; i > 0; i--) {
            let prefix = str.slice(0, i)
            if (prefix in memo) {
                memo[prefix]++
            } else {
                memo[str.slice(0, i)] = 1
            }
        }
    }
    
    
    let maxCount = strs.length
    let prefix = ''
    
    for (const key in memo) {
        if (memo[key] > maxCount) {
            maxCount = memo[key]
            prefix = key
        } else if (memo[key] === maxCount) {
            if(key.length > prefix.length) {
                maxCount = memo[key]
                prefix = key
            }
        }
    }
    
    return prefix
};