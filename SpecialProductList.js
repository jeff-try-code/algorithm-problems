/*
problem form https://binarysearch.com/problems/Special-Product-List

Special Product List

Given a list of integers nums, return a new list such that each element at index i of the new list is the product of all the numbers in the original list except the one at i.

Constraints

2 ≤ n ≤ 100,000 where n is the length of nums


Example 1
Input
nums = [1, 2, 3, 4, 5]
Output
[120, 60, 40, 30, 24]
Explanation
120 = 2 * 3 * 4 * 5, 60 = 1 * 3 * 4 * 5, and so on.

Example 2
Input
nums = [3, 2, 1]
Output
[2, 3, 6]


I: array of numbers
O: a new list with product of all other index
E: a empty array
C: 2 ≤ n ≤ 100,000 where n is the length of nums

Note:  Do this without using division.

for loop input array
find all products before curent index save in new array

back loop input array
find all products after current index save in new array

return arry before * after

*/

const specialProductList = (arr) => {
  let productsBeforeIndex = Array(arr.length)
  let accumulateProduct = 1
  for (let i = 0 ; i < arr.length; i++) {
    productsBeforeIndex[i] = accumulateProduct
    accumulateProduct = accumulateProduct * arr[i]
  }

  let productsAfterIndex = Array(arr.length)
  accumulateProduct = 1
  for (let i = arr.length - 1 ; i >= 0; i --) {
    productsAfterIndex[i] = accumulateProduct
    accumulateProduct = accumulateProduct * arr[i]
  }

  let ans = Array(arr.length)
  for (let i = 0 ; i < arr.length; i++) {
    ans[i] = productsBeforeIndex[i] * productsAfterIndex[i]
  }

  return ans
}

let nums = [1, 2, 3, 4, 5]

console.log(specialProductList(nums))