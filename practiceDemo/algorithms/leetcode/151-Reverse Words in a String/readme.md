# 151. Reverse Words in a String

ref:[151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)

Given an input string, reverse the string word by word.

For example,
Given s = `the sky is blue`,
return `blue is sky the`.


Update (2015-02-12):
For C programmers: Try to solve it in-place in O(1) space.


Clarification:

* What constitutes a word?
    A sequence of non-space characters constitutes a word.
* Could the input string contain leading or trailing spaces?
    Yes. However, your reversed string should not contain leading or trailing spaces.
* How about multiple spaces between two words?
    Reduce them to a single space in the reversed string.
    
***

* 思路：
    + two-pass solution: `119ms`
        1. 去除首尾空格；以一个或多个空白符为分隔符，分隔成 words array。
        2. 栈：先进后出，实现反转。遍历 words array，按要求顺序输出。
       
        见 [demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/151-Reverse%20Words%20in%20a%20String/demo.js)
    + one-pass solution: `89ms`
        1. 倒序遍历字符串，跟踪一个 word 的首和尾，当处于 word 首部时，append。
        
        见 [demo1.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/151-Reverse%20Words%20in%20a%20String/demo1.js)