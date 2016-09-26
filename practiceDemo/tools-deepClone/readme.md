# deepClone

1. nodes, object literals, dates, regular expressions, arrays, and generic objects

    见[deepClone.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/tools-deepClone/deepClone.js)

***

2. JSON

`var resultObj = JSON.parse(JSON.stringify( oriObj ));`

> 能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。

***

ref：

+ [Clone Anything with JavaScript](https://davidwalsh.name/javascript-clone)
+ [How to Deep clone in javascript](http://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript)
+ [4 CREATIVE WAYS TO CLONE OBJECTS](http://heyjavascript.com/4-creative-ways-to-clone-objects/)
+ [深入剖析 JavaScript 的深复制](http://jerryzou.com/posts/dive-into-deep-clone-in-javascript/)

***

`typeOf` 判断类型

+ `null` object
+ `undefined` "undefined"
+ `1` `NaN` number
+ `"abc"` string
+ `true` boolean