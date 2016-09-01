# 20. Valid Parentheses

ref: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Given a string containing just the characters &#39;(&#39;, &#39;)&#39;, &#39;{&#39;, &#39;}&#39;, &#39;[&#39; and &#39;]&#39;, determine if the input string is valid.

The brackets must close in the correct order, &quot;()&quot; and &quot;()[]{}&quot; are all valid but &quot;(]&quot; and &quot;([)]&quot; are not.

***

+ 点：`stack`
+ 理清思路，事先考虑好边界条件（不要全靠debug，然后+边界条件处理）
    1. 主体：循环 str，遇到左括号们压栈；遇到右括号弹栈，比较栈顶元素与当前右括号是否成对：不成-false，成-继续。
    2. 如何比较成对，如何判断是左/右括号：键值对预存‘对’，e.g. `): '('`，key中存右括号，value存左括号
    3. 循环完成，就能判断 str valid么？要看stack中是否为空。
    4. 边界条件：str 长度为奇数，invalid；str 的第一个元素就是右括号，invalid。