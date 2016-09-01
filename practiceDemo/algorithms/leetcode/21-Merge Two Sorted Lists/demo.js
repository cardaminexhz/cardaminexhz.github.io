/**
 * Created by carda on 2016/9/1.
 */



/* Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number} 1-增序；0-降序
 * */
function ascendOrDescend(head) {
    if (head.next) {
        return (head.val < head.next.val ? 1 : 0);
    } else {
        return 1;
    }
}


function mergeTwoAscendLists(l1, l2) {
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
}

function mergeTwoDescendLists(l1, l2) {
    var dummyHead = new ListNode(0),
        p = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
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

}

function reverse2AscendList(list) {
    var current = list,
        save, previous = null;

    while (current) {
        save = current.next;

        current.next = previous;

        previous = current;

        current = save;
    }

    return previous;
}

/**
 * merge two sorted lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

    if (l1 && l2) {
        var head;

        if (ascendOrDescend(l1) === 1 && ascendOrDescend(l2) === 1) {
            head = mergeTwoAscendLists(l1, l2);
        } else if (ascendOrDescend(l1) === 0 && ascendOrDescend(l2) === 0) {
            head = mergeTwoDescendLists(l1, l2);
        } else if (ascendOrDescend(l1) === 0 && ascendOrDescend(l2) === 1) {
            l1 = reverse2AscendList(l1);
            head = mergeTwoAscendLists(l1, l2);
        } else if (ascendOrDescend(l1) === 1 && ascendOrDescend(l2) === 0) {
            l2 = reverse2AscendList(l2);
            head = mergeTwoAscendLists(l1, l2);
        }

        return head;
    }

    return (l1 ? l1 : (l2 ? l2 : null));

};
