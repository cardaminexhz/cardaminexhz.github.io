# Two Sum II - Input array is sorted

ref: [Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

    Input: numbers={2, 7, 11, 15}, target=9
    Output: index1=1, index2=2
    
*** 

1. 同1-TwoSum
2. 对数组做预处理，截取比target小的部分
    + 遍历
    + 二分查找，二分查找基于有序数组，这里符合条件

***

* 二分查找 binary search
    + 基本二分查找
    
            binarySearch(inputArr, target)
            若 target 在 inputArr 中，返回其索引；
            不在，返回 -1;
    + 扩展
    
            binarySearch(inputArr, target)
            若 target 在 inputArr 中，返回其索引；
            不在，返回 一个负值：Math.abs(pos) 可以得到插入 target 的位置，插入后保持 inputArr 有序。
        - 按位非 `~`
            1. 数10转换为二进制数 0000000000000000001010 ，
            2. 再对这个二进制数取反，0变1，1变0，是 1111111111111111110101，
            3. 最后再转换回十进制数就是-11了。
            4. `~10` 即 `-11`
        - [源码](https://github.com/cardaminexhz/cardaminexhz.github.io/tree/master/practiceDemo/algorithms/leetcode/167-Two Sum II/binarySearch.js)
        - ref: [Searching JavaScript arrays with a binary search](http://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/)
