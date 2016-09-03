/**
 * Created by carda on 2016/9/3.
 */

function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
    push: function (element) {
        // Add the new element to the end of the array.
        this.content.push(element);
        // Allow it to bubble up.
        this.bubbleUp(this.content.length - 1);
    },

    pop: function () {
        // Store the first element so we can return it later.
        var result = this.content[0];
        // Get the element at the end of the array.
        var end = this.content.pop();
        // If there are any elements left, put the end element at the
        // start, and let it sink down.
        if (this.content.length > 0) {
            this.content[0] = end;
            this.sinkDown(0);
        }
        return result;
    },

    remove: function (node) {
        var length = this.content.length;
        // To remove a value, we must search through the array to find
        // it.
        for (var i = 0; i < length; i++) {
            if (this.content[i] != node) continue;
            // When it is found, the process seen in 'pop' is repeated
            // to fill up the hole.
            var end = this.content.pop();
            // If the element we popped was the one we needed to remove,
            // we're done.
            if (i == length - 1) break;
            // Otherwise, we replace the removed element with the popped
            // one, and allow it to float up or sink down as appropriate.
            this.content[i] = end;
            this.bubbleUp(i);
            this.sinkDown(i);
            break;
        }
    },

    size: function () {
        return this.content.length;
    },

    bubbleUp: function (n) {
        // Fetch the element that has to be moved.
        var element = this.content[n], score = this.scoreFunction(element);
        // When at 0, an element can not go up any further.
        while (n > 0) {
            // Compute the parent element's index, and fetch it.
            var parentN = Math.floor((n + 1) / 2) - 1,
                parent = this.content[parentN];
            // If the parent has a lesser score, things are in order and we
            // are done.
            if (score >= this.scoreFunction(parent))
                break;

            // Otherwise, swap the parent with the current element and
            // continue.
            this.content[parentN] = element;
            this.content[n] = parent;
            n = parentN;
        }
    },

    sinkDown: function (n) {
        // Look up the target element and its score.
        var length = this.content.length,
            element = this.content[n],
            elemScore = this.scoreFunction(element);

        while (true) {
            // Compute the indices of the child elements.
            var child2N = (n + 1) * 2, child1N = child2N - 1;
            // This is used to store the new position of the element,
            // if any.
            var swap = null;
            // If the first child exists (is inside the array)...
            if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N],
                    child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore)
                    swap = child1N;
            }
            // Do the same checks for the other child.
            if (child2N < length) {
                var child2 = this.content[child2N],
                    child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score))
                    swap = child2N;
            }

            // No need to swap further, we are done.
            if (swap == null) break;

            // Otherwise, swap and continue.
            this.content[n] = this.content[swap];
            this.content[swap] = element;
            n = swap;
        }
    }
};


// Definition for singly-linked list.
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var heap = new BinaryHeap(function (node) {
                    return node.val;
                }),
        dummyHead = new ListNode(""),
        cur = dummyHead,
        node;

    lists.forEach(function (head) {
        if(head !== null) {
            heap.push(head);
        }
    });

    while(heap.size() !== 0) {
        node = heap.pop();
        cur.next = node;
        cur = cur.next;

        if(node.next !== null) {
            heap.push(node.next);
        }
    }

    return dummyHead.next;
};


// ------------------------------ test
var l1 = new LinkedList(),
    l2 = new LinkedList(),
    l3 = new LinkedList(),
    l4 = new LinkedList();

[1,3,4,6].forEach(function (elem) {
    l1.append(elem);
});
[2,5].forEach(function (elem) {
    l2.append(elem);
});
/*[6,11,15].forEach(function (elem) {
    l3.append(elem);
});
[16,20].forEach(function (elem) {
    l4.append(elem);
});*/

var lists = [l1.head, l2.head, l3.head, l4.head];
var result = new LinkedList(mergeKLists(lists));
result.print();
