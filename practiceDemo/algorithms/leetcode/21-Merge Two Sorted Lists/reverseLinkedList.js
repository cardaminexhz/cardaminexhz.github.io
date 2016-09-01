/**
 * Created by carda on 2016/9/1.
 * @comment reverse linked list
 */

/**
 * single LinkedList
 * @variable head, length
 * @method push(), append a new node
 *         indexOf(), return the position(1 based) of given value
 *         removeAt(), remove node at given position
 *         remove(), remove node which value equals given value
 *         getSize(), return the number of nodes in the list
 *         print(), return an array consists of nodes' value
 * */
function LinkedList() {
    var Node = function (val) {
        this.val = val;
        this.next = null;
    };
    this.length = 0;
    this.head = null;

    this.push = function (val) {
        var node = new Node(val),
            pointer = this.head;

        if (this.head === null) {
            this.head = node;
        } else {
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = node;
        }
        this.length++;
    };

    this.indexOf = function(val) {
        var current = this.head,
            pos = 1;

        while(current) {
            if(current.val === val) {
                return pos;
            }
            pos++;
            current = current.next;
        }
        return -1;
    };

    this.removeAt = function (pos) {
        var previous = null,
            current = this.head;

        if (pos > this.length) {
            console.log("[ERROR] pos not existed;");
            return;
        }

        for (var i = 1; i < pos; i++) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;

        return current;
    };

    this.remove = function(val) {
        var pos = this.indexOf(val);
        return this.removeAt(pos);
    };

    this.getSize = function () {
        console.log(this.length);
        return this.length;
    };

    this.print = function () {
        var pointer = this.head,
            valArr = [];

        while (pointer) {
            valArr.push(pointer.val);
            pointer = pointer.next;
        }

        console.log(valArr.valueOf());
        return valArr;
    };
}

// non-recursively implement
function reverseLinkedList(linkedList) {
    var current = linkedList.head,
        save, previous = null;

    while (current) {
        save = current.next;

        current.next = previous;

        previous = current;

        current = save;
    }

    linkedList.head = previous;
}


// -------------------- test --------------------
var l1 = new LinkedList();
[-3, 0, 1, 2, 4, 6, 8].forEach(function (elem, index, array) {
    l1.push(elem);
});
l1.print();

console.log("reverse linked list");
reverseLinkedList(l1);
l1.print();

console.log("find the position of elem: 2");
console.log(l1.indexOf(2));

console.log("remove element at pos: 3");
console.log(l1.removeAt(3));
l1.print();

console.log("remove element: 1");
console.log(l1.remove(1));
l1.print();
