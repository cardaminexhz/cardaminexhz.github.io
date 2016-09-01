# 21. Merge Two Sorted Lists

ref: [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

***

* `merge two sorted (both ascend) linked lists`  

    这个题目的答案见 [mergeTwoAscendSortedList.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/21-Merge%20Two%20Sorted%20Lists/mergeTwoAscendSortedList.js)
    
    题目描述存在问题：`merge two sorted linked lists`，但题目其实预设了1.有序单向链表 2.增序（根据答案推出）
    
    点在于 `头指针` 的设置。

* `merge two sorted linked lists`    
    如果是 `merge two sorted linked lists`，解答见 [demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/21-Merge%20Two%20Sorted%20Lists/demo.js)
    + 思路
        1. 比较长短，需要预先遍历两个链表，记录长度，将较短的链表插入另一个链表中 (不需要，因为链表不需要通过移动来插入元素；但需要考虑链表为空的情况)
        2. 两个有序链表，增序，降序？
        3. 首先判断序：增序 | 降序。可比较前两个元素。那么需要考虑边界条件：只有一个元素的链表 `[1]`
        4. l1, l2 序相同，直接合并；序不同，先统一序（e.g. 将降序链表 reverse 为升序链表 `单链表的反转`）

***

+ 点：单向链表

    见 [reverseLinkedList.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/21-Merge%20Two%20Sorted%20Lists/reverseLinkedList.js)
    
        single LinkedList
        
        @variable 
        head, length
        @method 
        push(), append a new node
        indexOf(), return the position(1 based) of given value
        removeAt(), remove node at given position
        remove(), remove node which value equals given value
        getSize(), return the number of nodes in the list
        print(), return an array consists of nodes' value
