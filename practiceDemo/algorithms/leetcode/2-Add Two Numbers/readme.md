# 2. Add Two Numbers

ref: [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

***

* 思路：
    1. 读清题意。
    2. 进位的处理。
    3. 遍历较短的一个list `while(i !== null && j !== null) {}`
    4. 遍历较长的一个list `while(i !== null || j !== null) {}`
    
    见 [demo1.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/2-Add%20Two%20Numbers/demo1.js)
            