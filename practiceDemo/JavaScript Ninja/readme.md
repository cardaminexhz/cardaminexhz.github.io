# JavaScript Ninja practice

+ 3.3 实现自己的forEach函数  2016-7-26  `forEach`

1.基础功能：该函数在数组的每个元素上都进行回调调用  
2.增强：校验第一个参数是数组；第二个参数是函数  
3.增强：开发人员在任何时候都可以终止循环  
4.增强：除index索引外，传递更多参数给callback函数  

***

+ 7 正则   2016-8-2  `regExp`
`正则需要大量的练习，并从中总结技巧 - xhz`
    - 1.中横线字符串 -> 驼峰拼写 e.g. border-bottom-width -> borderBottomWidth
    - 1-1.中横线字符串 <- 驼峰拼写 e.g. border-bottom-width <- borderBottomWidth
    - 2.压缩查询字符串 e.g. foo=1&foo=2&blah=a&blah=b&foo=3 -> foo=1,2,3&blah=a,b 
    - 3.去除字符串前后多余空格
    - 4.交换字符串中的两个单词
        * 4-1 替换字符 $n - 重新组合
        * 4-2 替换字符 $&，匹配的字符串
        * 4-3 替换字符 $` $'，匹配 - 使用$`和$'字符替换内容
        * 4-4  删除行内样式中的单引号
    - 5.洗扑克: 将 ThisNimojs-JavaScript 使用正则替换成 `TJhaivsaNSicmroijpst` - 来自 nimojs blog
        