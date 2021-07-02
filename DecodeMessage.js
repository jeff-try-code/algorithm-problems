/*
problem form https://binarysearch.com/problems/Decode-Message

Decode Message

Given the mapping "a" = 1, "b" = 2, ... "z" = 26, and an encoded message message (as a string), count the number of ways it can be decoded.

Constraints

n ≤ 100,000 where n is the length of message

Example 1
Input
message = "111"
Output
3
Explanation
This can be decoded 3 ways: aaa, ak, and ka.

Example 2
Input
message = "8"
Output
1
Explanation
This can be only decoded one way, as h.

Example 3
Input
message = "12"
Output
2
Explanation
This can be decoded 2 ways: ab or l.

Example 4
Input
message = "60"
Output
0
Explanation
There's no way to decode this message.

Example 5
Input
message = "0012"
Output
0

I: string of numbers
O: the number of ways it can be decoded.
E: return 0 if input is 0
C: n ≤ 100,000 where n is the length of message

ex:
1214
|    \
214   14
| \    | \ 
14 4   4  r1
| \  \  \
4  r1 r1 r1
|
r1  

sudo code:
function decodeMessage(num string) {
    function inrange (str) {
        let num = Number(str)
        return (num > 1= && num <= 26)
    }

    recursive help (index) {
        if (index = string length - 1) {
            return 1
        }
        if (string[index] = 0) {
            return 0
        }

        let one = inrange(string[index]) ? help(index + 1) : 0
        let two = inrange(string[index] + string[index + 1]) ? help(index + 2) : 0

        retrun one + two

    }
    retrun help(0)
}
*/

const decodeMessage = (nums) => {
    const inrange = (str) => {
        let num = Number(str)
        return (num >= 1 && num <= 26)
    }

    const help = (i) => {
        if (i >= nums.length) return 1
        if (nums[i] == 0) return 0

        let one = inrange(nums[i]) ? help(i + 1) : 0
        let two = inrange(nums[i] + nums[i + 1]) ? help(i + 2) : 0

        return one + two
    } 

    return help(0)

}

// improvement (clean up)
/*

Time Complexity
O(n) since the it is checking every index
Space Complexity
O(n) since memo was created for each index

*/
const decodeMessage = (nums) => {
    const inrange = (str) => {
        let num = Number(str)
        return (num >= 1 && num <= 26)
    }

    const help = (i, memo = {}) => {
        if (i >= nums.length) return 1
        if (nums[i] === '0') return 0
        if (i in memo) return memo[i]

        let res = help(i + 1, memo)
        if(inrange(nums[i] + nums[i + 1])) {
            res += help(i + 2,memo) 
        }
        memo[i] = res
        return res
    } 

    return help(0)
}


