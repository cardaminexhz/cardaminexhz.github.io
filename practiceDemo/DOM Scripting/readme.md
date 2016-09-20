# DOM 编程艺术

Chapter 2

* `<script>`标签的位置：HTML文档的最后，`</body>`之前
* 逻辑操作符 `&&` `||` 短路
    + `&&` 先计算第一个表达式，若为false，则不会处理后续表达式。
        返回从左到右第一个false表达式的值，若未找到则返回最后一个表达式的值。
        - `a = 1; b = 11;`
        - `(a === 5) && (b++)` 返回值: false; a,1; b,11;
        - `(a++) && (b++)` 返回值: 11; a,2; b,12;
        - `2 && 's1' && '123' && 'sss'` 返回值: 'sss'
        - `2 && 's1' && '' && 'sss'` 返回值: ""
        - `2 && 's1' && NaN && 'sss'` 返回值: NaN
    + `||` 先计算第一个表达式，若可以转换为true，则返回此表达式的值，否则计算后续表达式。
        对非布尔型的运算数，用于从一组备选值中选择第一个定义了的、非空的值。
        - `a = 1; b = 11;`
        - `(a === 5) || (b++)` 返回值: 11; a,1; b,12;
        - `(a++) || (b++)` 返回值: 1; a,2; b,11;
        - `var attr = attr || "";` 常用来判断一个变量是否已定义，若没有，则给一个初始值。
* 内建对象
    + `Math`
        - `Math.round()` 四舍五入
        - `Math.ceil()` 向上取整
        - `Math.floor()` 向下取整
        - `Math.abs()` 绝对值
        - `Math.max()` `Math.min()`
        - `Math.power(x, y)` x^y
        - `Math.random()` 返回0-1之间的随机数
        - 应用：生成指定范围内的随机数：
            
                // max - 期望的最大值
                // min - 期望的最小值 
                Math.floor(Math.random()*(max-min+1)+min);
    + `Date`
        - 字符串转Date
        
                var str ='2012-08-12 23:13:15';
                str = str.replace(/-/g,"/");
                var date = new Date(str );
            + 为什么要转化成 以`/`分隔的显示：
                
                new Date()在不同浏览器中支持的写法都不同，最兼容的写法是yyyy/MM/dd
                
                其他写法在部分浏览器中无法解析。
                如，IE7不支持(yyyy-MM-dd，只支持/分割)
        - Date转字符串
        
                var str ='2012/08/12 23:13:15';
                var date = new Date(str);
                console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
            + `getFullYear()` 返回一个表示年份的 4 位数字
            + `getMonth() + 1` getMonth() 返回 0-11 来代表1月-12月。