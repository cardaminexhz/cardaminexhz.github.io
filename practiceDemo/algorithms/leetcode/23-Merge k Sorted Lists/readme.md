# 23. Merge k Sorted Lists

ref: [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

***

* 点：
    1. 暴力合并的复杂度分析
        + k sorted lists with size of n
        + 最坏情况下，合并两个链表需要比较 2n 个节点
        + `T(n) = 2n + 3n + ... + kn = O(kn^2)`
        + `S(n) = O(1)`
    2. 堆 binary heap
        + 将 k 个 list 的首指针放入堆
        + 从堆中取出最小节点 node，加到链表中
        + 若该 node 有 next，则插入堆
        
        类似树的广度优先遍历（BF Traverse）。
        
        这里的堆类似队列，只是堆保证堆顶元素总是最大/最小：堆的插入、移除都保证了这点。
        
        + 时间消耗在堆的构建操作：每插入一个元素，消耗 `log(k)`，总共 nk 个节点， `nklog(k)`。
        `T(n) = nklog(k)`
        + 空间消耗在堆，有 k 个元素的堆：`S(n) = k`
        
        + ref：   
            [堆操作](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/23-Merge%20k%20Sorted%20Lists/binaryHeap123.js)   
            [堆操作-注释源码](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/23-Merge%20k%20Sorted%20Lists/BinaryHeap.js)   
            [Binary Heaps](http://eloquentjavascript.net/1st_edition/appendix2.html)
    3. 分治 divide and conquer
        + `T(n) = nklog(k)`
        + `S(n) = 1`
        + 基于 21 Merge two sorted lists
        + 见[divide-conquer.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/23-Merge%20k%20Sorted%20Lists/divide-conquer.js)