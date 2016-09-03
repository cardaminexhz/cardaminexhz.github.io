/**
 * Created by carda on 2016/9/2.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

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

function num2List(num) {
    var arr, resultList = new LinkedList();

    arr = (num + "").split("");
    arr.forEach(function (elem) {
        resultList.append(elem);
    });

    return resultList;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var num1, num2, resultList;
    l1 = new LinkedList(l1);
    l2 = new LinkedList(l2);

    l1.reverse();
    l2.reverse();
    num1 = parseInt(l1.print());
    num2 = parseInt(l2.print());

    resultList = num2List(num1 + num2);

    resultList.reverse();
    console.log(resultList.getValue());
    return resultList.getValue();
};



// ------------------------- test
var l1 = new LinkedList(),
    l2 = new LinkedList();

[2,4,3].forEach(function (elem) {
    l1.append(elem);
});

[5,6,4].forEach(function (elem) {
    l2.append(elem);
});

addTwoNumbers(l1.head, l2.head);


/** test case
 * [9,9,9,9,9,9,9,...,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
 * [1]
 */

/*l1.print();
l1.reverse();
l1.print();

console.log(l1.head)
var list = new LinkedList(l1.head)
list.print()*/
