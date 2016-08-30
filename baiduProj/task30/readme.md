<h3>任务目的</h3>
<ul>
    <li>加强对JavaScript的掌握</li>
    <li>熟悉常用表单处理逻辑</li>
</ul>

<h3>任务描述</h3>
<ul>
    <li>如<a target="_blank" href="http://7xrp04.com1.z0.glb.clouddn.com/task_2_30_1.jpg">示例图</a>中所示，基于上一个任务（任务29），在页面中添加多个表单</li>
    <li>
        要求:
        <ul>
            <li>表单获得焦点时，下方显示表单填写规则</li>
            <li>表单失去焦点时校验表单内容</li>
            <li>校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字</li>
            <li>校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字</li>
            <li>点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹窗显示“提交成功”，否则显示“提交失败”</li>
        </ul>
    </li>
</ul>

<h3>任务注意事项</h3>
<ul>
    <li>要求功能实现与任务描述中完全一致</li>
    <li>示例图仅为参考，样式不需要完全实现一致</li>
    <li>实现中，尽可能考虑代码的可读性和可复用性</li>
    <li>请注意代码风格的整齐、优雅</li>
    <li>代码中含有必要的注释</li>
    <li>不允许借助任何第三方组件库实现</li>
</ul>

<h3>任务协作建议</h3>
<ul>
    <li>团队集中讨论，明确题目要求，保证队伍各自对题目要求认知一致</li>
    <li>各自完成任务实践</li>
    <li>交叉互相Review其他人的代码，建议每个人至少看一个同组队友的代码</li>
    <li>相互讨论，最后合成一份组内最佳代码进行提交</li>
</ul>

<h3>在线学习参考资料</h3>
<ul>
    <li><a target="_blank" href="https://www.zhihu.com/question/22689579">Web相关名词通俗解释</a></li>
    <li><a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction">MDN HTML入门</a></li>
    <li><a target="_blank" href="http://www.imooc.com/learn/9">慕课HTML+CSS基础教程视频</a></li>
    <li><a target="_blank" href="http://www.w3school.com.cn/js/js_form_validation.asp">JavaScript 表单验证</a></li>
    <li><a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Forms">HTML表单指南</a></li>
</ul>

***

* `visibility` V.S. `display`
    + `visibility="visible|hidden"`
        - 隐藏，仍占据原来的空间
        - 隐藏后，不能再接收事件
    + `display: none;`
        - 消失，从页面上被移走，不占据原来的空间
        
***

* 非侵入式js (√) - `表现与逻辑分离`

        <input type="button" id="btn" onclick="dosth()"> <!-- 侵入式js -->
        
        document.getElementById("btn").addEventListener("click", clickHandler, false);  /* 非侵入式js */
   
***

* 思路：
    + 需求：
        1. 表单项获得焦点时，显示填写规则
        2. 表单项失去焦点时，进行验证，正确/错误提示
        3. 点击提交按钮时，验证页面所有输入
    + `validate.js`
        1. 循环所有 input，为不同事件绑定响应handler: `focusHandler` `blurHandler` 
        2. 点击提交按钮时，再次循环所有 input，通过`模拟事件`，来调用上面定义的 `blurHandler`
    + `validate-cat.js`
        1. （同上）循环所有 input，为不同事件绑定响应handler: `focusHandler` `blurHandler` 
        2. 提取公共的 input 验证函数 `function validate(inputID, value)` （类型->验证规则，值->要验证的内容），相当于：
            - 表单项通过事件触发验证，`target.id` `target.value`
            - 点提交按钮验证整个表单时，循环所有 input，显式调用验证，`GLOBAL_INPUT[i].id` `GLOBAL_INPUT[i].value`
    + `validate-v3.js`
        1. 用在父级元素 form 上` 事件委托` 来代替上述方案中的 `循环所有input`，来为不同事件绑定响应handler: `focusHandler` `blurHandler`
        
            `focus` `blur` 不冒泡，需要在捕获阶段侦听到它们。
            
                GLOBAL_FORM.addEventListener("focus", focusHandler, true);
                GLOBAL_FORM.addEventListener("blur", blurHandler, true);
        2. （同上）提取公共的 input 验证函数 `function validate(inputID, value)`

***

* 点：`事件委托` `事件模拟`
    + 事件委托
        - 事件委托是什么   
            利用 事件冒泡/捕获，在DOM树中尽量最高的层次上，只指定一个 handler，来管理某一类型的事件。
        - 适用于    
            所有用到按钮的事件（多数鼠标事件、键盘事件）。   
            `click` `mousedown` `mouseup` `keydown` `keyup` `keypress`   
        - 优点（内存，时间）
            1. 在JS中，添加到页面上的 event handler（即函数）也是对象，会占用内存；内存中对象越多，性能越差。
            2. 为DOM元素绑定 event handler，而导致的DOM访问次数，会影响页面的交互就绪时间。
            3. 新增子对象时，不需要再次为其绑定 handler。
            
            总之，通过事件委托，可以减少 handler，从而减少内存占用；减少绑定 handler 导致的DOM访问次数，从而减少时间消耗。
            
            适用于在 ul 上代理所有 li 的事件；在 table 上代理所有 td 的事件。适用于动态添加的内容。
            
        - 缺点
            在太高的层级上绑定，可能造成事件误判（所以，不要滥用咯）
        - 一段示例代码
            
                function blurHandler(ev) {
                    var event = ev || window.event,
                        target = event.target || event.srcElement,
                        id = target.id;
                    
                    switch (id){
                        case "dosth":
                            // do sth.
                            break;
                        case "goSomewhere":
                            // go somewhere.
                            break;
                    }
                }
            
                GLOBAL_FORM.addEventListener("blur", blurHandler, true);
                
    + 事件模拟
        - 模拟事件是什么
            * 事件，通常由用户操作，或通过其他浏览器功能来触发。
            * 但，也可以使用 JS 来在任意时刻触发特定的事件。
            * 此时的事件和浏览器创建的事件一样，也会冒泡，并能引发相应 handler 的处理 etc.。
        - 创建自定义事件：
            * 创建和分发事件  `Event 构造函数` `dispatchEvent`
            
                    var event = new Event('build');
                    
                    // Listen for the event.
                    elem.addEventListener('build', function (e) { ... }, false);
                    
                    // Dispatch the event.
                    elem.dispatchEvent(event);
            * 添加自定义数据  `CustomEvent`
            
                    var event = new CustomEvent('build', { 'detail': elem.dataset.time });
                    
                    function eventHandler(e) {
                      log('The time is: ' + e.detail);
                    }
        - 如何模拟事件（已过时）
            1. 创建 event 对象
            2. 使用与事件有关的信息对其初始化。每种类型的 event 对象都有一个特殊的方法，为其传入适当参数就可以初始化该 event 对象。
            3. 触发事件
            一段示例代码
        
                    var event = document.createEvent("MouseEvents");
                    event.initEvent("focus", true, true);
                    input[i].dispatchEvent(event);