<h3>任务目的</h3>
<ul>
    <li>加强对JavaScript的掌握</li>
    <li>熟悉常用表单处理逻辑</li>
</ul>

<h3>任务描述</h3>
<ul>
    <li>如<a target="_blank" href="http://7xrp04.com1.z0.glb.clouddn.com/task_2_31_1.jpg">示例图</a>中所示，在页面中完成两个单选框，切换单选框的不同选项时下方显示的表单随之切换。</li>
    <li>当选择在校生时，出现两个select下拉菜单，一个选择城市，一个选择学校，当选择非在校生时，出一个文本输入框</li>
    <li>学校下拉菜单里的学校名单均为城市下拉菜单中所选的城市中的大学，当城市发生变化时，学校一起发生变化</li>
    <li>城市及学校的数据随意编造即可，无需真实完整</li>
</ul>

<h3>任务注意事项</h3>
<ul>
    <li>要求功能实现与任务描述中完全一致</li>
    <li>示例图仅为参考，样式不需要完全实现一致</li>
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

* `visibility` or `display`
    + 此处当切换radio时，切换在校/非在校的输入框，但显示在相同位置，所以隐藏的元素不应占据空间 =》`display`

*** 
 
* html 选择框脚本 `<select>` `<option>`
    + 为与 `<select>` 控件 交互，HTMLSelectElement 还提供一下属性方法：
        - multiple, (Boolean) <=> `<select ...  multiple="multiple">`
        - options, 控件中所有 `<option>` 元素的 HTMLCollection
        - selectedIndex, 选中项的索引（基于0）；若无，-1；支持多选的控件，只保存选中第一项的索引。
        - size <=> `<select ... size="n">` 选择框中可见的行数
        - type, select-one | select-multiple
        - `add(newOption, relOption)`
        - `remove(pos)`
    + DOM 中，每个 `<option>` 元素都有一个 HTMLOptionElement 对象表示：
        - index, 当前选项在options集合中的索引
        - text, 选项的文本
        - value, 选项的值
        - selected, 当前选项是否被选中
        - label
        - 【推荐】操作选项时，使用特定于选项的属性（所有浏览器都支持）；不推荐用标准DOM技术来操作`<option>`的文本、值。
            
                var text = selectBox.options[0].text;
                var value = selectBox.options[0].value;
        - change 事件
            * 对选择框，只要选中了选项就触发
            * 对其他表单字段，值被修改且焦点离开当前字段，才触发

* 选择选项

        /* 获取选中项的索引、文本、值，适用于单选框 */
        var index, option, text, value;
        index = selectBox.selectedIndex;
        option = selectBox.options[index];
        text = option.text;
        value = option.value;
        
        /* 多选框，遍历options的 selected (Boolean) 属性 */
        var selectedOptions = [];
        for (var i = 0; i < target.options.length; i++) {
            if (target.options[i].selected) {
                selectedOptions.push(target.options[i]);
            }
        }
* 添加选项
    1. HTMLSelectElement 的 `add(newOption, relOption)`
        
            selectBox.add(new Option(text, val), undefined)  
    2. 标准DOM + `appendChild()` / `insertBefore()`
    
            selectBox.appendChild( new Option(text, val) );
            selectBox.insertBefore( new Option(text, val), relOption);
* 移除选项
    1. 移除某一个
        + HTMLSelectElement 的 `remove(pos)`
        
                selectBox.remove(pos)
        + DOM `removeChild()`
        
                selectBox.removeChild( selectBox.option[0] );
    2. 移除全部
        
            selectBox.options.length = 0;
* 移动和重排选项
    + 移动：DOM `appendChild()`     
        如果为 `appendChild()` 传入一个文档中已有的元素，就会先从该元素的父节点中移除它，再把它添加到指定位置。  
        
            selectBox2.appendChild(selectBox1.options[0]);
    + 重排：DOM `insertBefore()`  
            
            /* e.g. 将选项位置前移一个 */
            var optionToMove = selectBox.options[2],
                relPos = optionToMove.index-1;
            
            selectBox.insertBefore(optionToMove, selectBox.options[relPos]);
    + 移动与重排，会重置每一个选项的 index。