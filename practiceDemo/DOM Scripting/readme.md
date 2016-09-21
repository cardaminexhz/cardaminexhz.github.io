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
            
***

Chapter 5

* 平稳退化 `graceful degradation`
    > 确保网页在没有JS的情况下也能正常工作。
    + 谁关心这个：`搜索引擎`
    
        大多数搜索引擎不理解JS。所以能否平稳退化会影响其在搜索引擎上的排名。
    + 场景：点击链接，在新窗口打开（调用popUp）
        1. 伪协议 `javascript:`
            - 相对于真实协议 `http` `ftp` etc. 伪协议是一种非标准化的协议。
            - `javascript:` 允许通过一个链接来调用JS函数。
               
                    <a href="javascript:popUp('http://www.example.com');">Example</a>
                   - 在支持伪协议的浏览器里运行正常。
                   - 支持伪协议、但禁用JS的浏览器什么也不做。
                   - 较老的浏览器尝试打开链接但失败。
        2. 一种解决方案：
        
                <a href="http://www.example.com" onclick="popUp(this.href); return false;">Example</a>
            - 将 `href` 设置为真实URL，使得即使JS被禁用，这个链接的基本功能仍然有效。
            - 但未做到结构和逻辑分离：标记里内嵌了逻辑。
* 渐进增强：
    > 用一些额外的信息层去包裹原始数据。
    + 标记良好的内容就是一切（的基础）。
    + 如CSS，将文档结构与样式（外部样式表）分离，可以确保网页能平稳退化：支持CSS的浏览器可以展现设计效果；不支持或禁用时也可正确显示基本结构。
    + 按照 `渐进增强` 创建的网页几乎都符合 `平稳退化` 原则。
    + 分离JS：将文档结构与逻辑（外部脚本）分离。涉及到`<script>标签的位置`
* 向后兼容
    > 兼容老版本浏览器。
    1. 对象检测 `object detection` （简单、健壮，推荐）
    
            if(method) {
                // statement using method
            }
        + 检测的是方法（对象）是否存在，注意 `if(method())` `×` 检测的是方法的结果
        
                <a href="http://www.example.com" class="popup">Example</a>
                 
                 /* 分离JS */
                 window.onload = function() {
                    /* 对象检测 */
                    if( !document.getElementsByTagName ) {
                        return false;
                    }
                    
                    var lnks = document.getElementsByTagName("a");
                    for(var i = 0; i < lnks.length; i++) {
                        if(lnks[i].getAttribute("class") == "popup") {
                            lnks[i].onclick = function() {
                                popUp(this.href);
                                /* 不触发链接的默认行为 */
                                return false;
                            }
                        }
                    }
                 }
        2. 浏览器嗅探 `browser sniffing` （不推荐）  
            > 根据浏览器供应商提供的信息来解决向后兼容。
            + 不准确。
            + 测试所有可能出现的供应商和版本号组合。
            + 浏览器出新版本时，不得不修改嗅探脚本。
* 性能考虑
    > 考虑脚本的最优执行
    1. 减少DOM访问，减少标记
    2. 合并、放置脚本
        + 性能优化时首要考虑的一点：减少请求数量。
        + 合并js文件，可以减少加载页面时发送的请求数量。
        + 脚本在标记中的为孩子会影响页面的初次加载时间：
            - 位于`<head>`的脚本，会导致浏览器无法并行加载其他文件（img或js）：下载脚本期间，浏览器不会下载其他文件。
            - 放到`</body>`之前
            - onload V.S. onready 【TODO】 
    3. 压缩脚本，减少文件大小 `xx.min.js`