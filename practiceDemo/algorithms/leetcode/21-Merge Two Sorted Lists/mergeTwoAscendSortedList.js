/**
 * Created by carda on 2016/9/1.
 */

/* Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * merge two ascend sorted lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

    var dummyHead = new ListNode(0),
        p = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }

    if (l1 !== null) {
        p.next = l1;
    }
    if (l2 !== null) {
        p.next = l2;
    }

    return dummyHead.next;
};
