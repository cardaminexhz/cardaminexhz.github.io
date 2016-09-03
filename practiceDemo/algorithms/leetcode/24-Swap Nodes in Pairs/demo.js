/**
 * Created by carda on 2016/9/3.
 */

//* Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}


function LinkedList(head) {
    var ListNode = function (val) {
        this.val = val;
        this.next = null;
    };
    this.head = head || null;

    this.append = function (val) {
        var node = new ListNode(val),
            cur = this.head;

        if (this.head === null) {
            this.head = node;
        } else {
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
        }
    };

    this.reverse = function () {
        var prev = null,
            cur = this.head,
            save;

        while (cur) {
            save = cur.next;

            cur.next = prev;

            prev = cur;

            cur = save;
        }

        this.head = prev;
    };

    this.print = function () {
        var pointer = this.head,
            valArr = [];

        while (pointer) {
            valArr.push(pointer.val);
            pointer = pointer.next;
        }

        console.log(valArr.join(""));
        return valArr.join("");
    };

    this.getValue = function() {
        var pointer = this.head,
            valArr = [];

        while (pointer) {
            valArr.push(parseInt(pointer.val));
            pointer = pointer.next;
        }

        return valArr;
    }

}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var dummyHead = new ListNode("");
        dummyHead.next = head;
    var prev = dummyHead,
        cur = dummyHead.next,
        save;

    while(cur !== null && cur.next !== null) {
        save = cur.next;

        prev.next = save;

        cur.next = save.next;

        save.next = cur;

        prev = cur;
        cur = cur.next;
    }

    return dummyHead.next;
};



// ------------------------- test
var l1 = new LinkedList();

[1,2,3,4].forEach(function (elem) {
    l1.append(elem);
});

l1.print();

var l2 = new LinkedList(swapPairs(l1.head));
l2.print();