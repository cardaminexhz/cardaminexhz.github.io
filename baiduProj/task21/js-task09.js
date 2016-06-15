/**
 * Created by cardaminexhz on 2016/6/13.
 */

/***
 * 要求遇到用户输入空格，逗号，回车时，都自动把当前输入的内容作为一个tag放在输入框下面。
 Tag不能有重复的，遇到重复输入的Tag，自动忽视。
 每个Tag请做trim处理
 最多允许10个Tag，多于10个时，按照录入的先后顺序，把最前面的删掉
 当鼠标悬停在tag上时，tag前增加删除二字，点击tag可删除
 */
// 全局变量
global_tagArr = [];


var $ = function (id) {
    return document.getElementById(id);
};


function renderTags(tag, type) {
    console.log(tag);

    var tagElem = document.createElement("li");
    tagElem.innerText = tag;
    $("tags-show").appendChild(tagElem);
}

$("tag-input").onkeyup = function(event) {
    var tagValue,
        existed = false,
        type = 1;   // 默认tag操作类型为添加到队尾

    // 捕获键盘输入：空格，逗号，回车
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 188) {   // 回车、空格、逗号
        tagValue = $("tag-input").value.trim();

        if(e.keyCode === 188) {     // 逗号，需从输入内容末尾删除逗号
            tagValue = tagValue.substring(0, tagValue.length-1);
        }

        $("tag-input").value = '';

        // 输入的tag是否已存在
        existed = global_tagArr.some(function(item){
            return item === tagValue;
        });
        if(existed) {
            console.log("already exist");
            return;
        }

        // tag 多于10个时，移除最前面的
        if(tagValue.length === 10){
            type = 2;   // tag操作类型: 删除
        }

        global_tagArr.push(tagValue);
        console.log(tagValue);
        renderTags(tagValue);

    }
};
