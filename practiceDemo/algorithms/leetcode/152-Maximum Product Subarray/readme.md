# 152. Maximum Product Subarray

ref: [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.

***

* 思路：
    1. as. [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)  
    [solution](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/53-Maximum%20Subarray)
    2. 这里求积，不仅要追踪 max，也要追踪 min：min 是负值里的绝对值最大的数，如果和一个负值相乘，会变成较大数。
    3. DP
        + 寻找状态转移方程
        + `f(k)` 表示到索引k位置结束的子串的 maxProduct
        + `g(k)` 表示到索引k位置结束的子串的 minProduct
        + `f(k) = max( f(k-1) * nums[k], nums[k], g(k-1) * nums[k])`
        + `g(k) = min( f(k-1) * nums[k], nums[k], g(k-1) * nums[k])`
        + 初始状态 `f(0) = nums[0]` `g(0) = nums[0]`
        见[demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/152-Maximum%20Product%20Subarray/demo.js)