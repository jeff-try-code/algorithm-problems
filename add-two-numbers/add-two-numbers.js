/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryOver = false
    let head = new ListNode('start', null)
    let curr = head
    while(l1 !== null || l2 !== null || carryOver) {
        let sum = 0
        if (l1 !== null) {
            sum += l1.val
            l1= l1.next
        }
        if (l2 !== null) {
            sum += l2.val
            l2= l2.next
        }
        if(carryOver) {
            sum ++
            carryOver = false
        }
        if (sum >= 10) {
            carryOver = true
            sum = sum - 10
        }
        curr.next = new ListNode(sum, null)
        curr = curr.next
    }
    return head.next
};