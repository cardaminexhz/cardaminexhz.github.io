/**
 * Created by carda on 2016/9/5.
 */



/* hash table */
function HashTable() {
    var size = 0;
    var entry = {};

    this.add = function (key, value) {
        if (!this.containsKey(key)) {
            size++;
        }
        entry[key] = value;
    };

    this.getValue = function (key) {
        return this.containsKey(key) ? entry[key] : null;
    };

    this.remove = function (key) {
        if (this.containsKey(key) && ( delete entry[key] )) {
            size--;
        }
    };

    this.containsKey = function (key) {
        return (key in entry);
    };

    this.containsValue = function (value) {
        for (var prop in entry) {
            if (entry[prop] == value) {
                return true;
            }
        }
        return false;
    };

    this.getValues = function () {
        var values = [];
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    };

    this.getKeys = function () {
        var keys = [];
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    };

    this.getSize = function () {
        return size;
    };

    this.clear = function () {
        size = 0;
        entry = {};
    };
}

// Definition for singly-linked list with a random pointer.
function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function (head) {
    var dummyHead = new RandomListNode(""),
        q = dummyHead,
        p = head,
        hashTable = new HashTable();

    while(p !== null) {
        q.next = new RandomListNode(p.label);
        hashTable.add(p, q.next);

        p = p.next;
        q = q.next;
    }

    p = head;
    q = dummyHead;
    while(p !== null) {
        q.next.random = hashTable.getValue(p.random);
        p = p.next;
        q = q.next;
    }

    return dummyHead.next;
};



// ---------------------------------test
var head = new RandomListNode("head"),
    n1 = new RandomListNode("1"),
    n2 = new RandomListNode("2"),
    n3 = new RandomListNode("#");

head.next = n1;
n1.next = n2;
n2.next = n3;
head.random = n1;
n1.random = head;
n2.random = n2;
n3.random = n1;

printRandomList(head);

var bak = copyRandomList(head);

printRandomList(bak);

function printRandomList (head){
    var arr = [],
        cur = head;
    while(cur !== null) {
        arr.push(cur.label);
        cur = cur.next;
    }
    console.log(arr.valueOf());
}