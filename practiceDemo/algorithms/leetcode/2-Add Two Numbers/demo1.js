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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var i = l1,
        j = l2,
        x, y, sum = 0,
        dummyHead = new ListNode(0),
        cur = dummyHead;

    while(i !== null || j !== null) {
        x = i ? i.val : 0;
        y = j ? j.val : 0;
        sum += x + y;
        cur.next = new ListNode(sum % 10);
        sum = Math.floor(sum/10);
        cur = cur.next;
        if(i !== null) i = i.next;
        if(j !== null) j = j.next;
    }

    if(sum === 1) {
        cur.next = new ListNode(1);
    }

    return dummyHead.next;
};


// ------------------------------------------test
var l1 = new LinkedList(),
    l2 = new LinkedList();

[2,4,3].forEach(function (elem) {
    l1.append(elem);
});

[5,6,4].forEach(function (elem) {
    l2.append(elem);
});

var result = addTwoNumbers(l1.head, l2.head),
    list = new LinkedList(result);
console.log(list.getValue());