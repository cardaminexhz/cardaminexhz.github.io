/**
 * Created by carda on 2016/9/4.
 */


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return [];

    var end = lists.length- 1;

    while(end > 0) {
        var begin = 0;
        while(begin < end) {
            lists[begin] = mergeTwoLists(lists[begin], lists[end]);
            begin++;
            end--;
        }
    }

    return lists[0];
};



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