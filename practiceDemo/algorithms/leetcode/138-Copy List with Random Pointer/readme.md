# 138. Copy List with Random Pointer

ref:[138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

***

* 思路：
    1. 遍历链表，为next赋值，构建常规的linked list.
    2. 对每个node，从链表中“找到”其 random 所指向的节点，赋给node.random。
    3. 在链表中查找节点，因为不能按索引访问，只能遍历 `T(n) = o(n^2)`
    4. 可以在第一次遍历的时候，将节点存入 hashMap（key-node, value-node.next），使得在为random赋值时可以按索引查找。
    5. 使用 hashMap `T(n) = o(n), S(n) = o(n)`
    
    见[demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/138-Copy%20List%20with%20Random%20Pointer/demo.js)