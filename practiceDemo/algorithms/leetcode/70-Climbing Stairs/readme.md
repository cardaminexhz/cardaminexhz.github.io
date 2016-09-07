# 70. Climbing Stairs

ref: [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

***

* 如何计算递归的 `T(n)`
* 思路：
    1. 要到达第 n 个台阶，只有两种方案：
        + 从第 n-1 个台阶走1步
        + 从第 n-2 个台阶走2步
        + 所以到达第 n 个台阶的方案有多少，取决于到达第 n-1 和 n-2 个台阶的方案有多少
        + 用 f(n) 表示到达第 n 个台阶的方案数：`f(n) = f(n-1) + f(n-2)`
        + 而很明显 `f(1) = 1` `f(2) = 1`
        + 斐波那契：`1 1 2 3 5 ...`
    2. 递归：
    3. `T(n) = O(n), S(n) = O(n)`
    4. `T(n) = O(n), S(n) = O(1)`
    
        方案见 [demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/70-Climbing%20Stairs/demo.js)
