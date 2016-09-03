# 28. Implement strStr()

ref: [28. Implement strStr()](https://leetcode.com/problems/implement-strstr/)

Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

***

* 考虑边界条件
    1. haystack, needle 均为空，或者一个为空
    2. haystack 长度小于 needle
    3. `HelloWorWorld` `World`
    4. `mississippi` `issip`  needle 在 haystack 中出现了多次
    5. 两个非常长的 haystack 'aa...ab', needle 'aa...aa'，应该只比较n次，否则会超时。
    
    见 [demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/28-Implement%20strStr()/demo.js)