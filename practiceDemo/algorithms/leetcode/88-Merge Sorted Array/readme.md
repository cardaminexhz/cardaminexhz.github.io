# 88. Merge Sorted Array

ref: [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:  
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements 
from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

***

* 思路：
    1. 要求不能创建新数组，只能在原有数组上插入，那么元素移动带来的性能消耗需要考虑。
    2. nums1, nums2 都有序（增序），不从头比较谁小，而从尾部`[m-1]` `[n-1]` 比较谁大，大者放入 `[m+n-1]`。
    3. 两个指针i, j，分别指向 nums1, nums2 的尾部，大于，小于，等于；
    4. 循环结束，若 i 还未走完，不需要处理；若 j 未走完，需要将nums2剩余部分插入num1首。
    5. 边界情况：为空
    
    见 [demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/88-Merge%20Sorted%20Array/demo.js)