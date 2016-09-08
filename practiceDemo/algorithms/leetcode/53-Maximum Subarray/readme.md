# 53. Maximum Subarray

ref: [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

More practice:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

***

* 思路：
    1. 双重循环，每次改变 tmpSum 都进行比较    
        `T(n) = O(n^2); S(n) = O(1)`    
        见[demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/53-Maximum%20Subarray/demo.js)
    2. DP
        `T(n) = O(n); S(n) = O(1)`
        + 寻找状态转移方程
        + `f(k)` 表示到索引k位置结束的字串的 maxSum
        + `f(k) = max( f(k-1) + nums[k], nums[k] )`
        + 初始状态 `f(0) = nums[0]`
        见[dp.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/53-Maximum%20Subarray/dp.js)
* 一道面试题：
    + 给定一个数组，由-1, 1组成，找出和为0的最长子串的长度
    + `T(n) = O(n^2); S(n) = O(1)`
    见[additional.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/53-Maximum%20Subarray/additional.js)
    
