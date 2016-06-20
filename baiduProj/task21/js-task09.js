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
global_interestsArr = [];


var $ = function (id) {
    return document.getElementById(id);
};


function renderTags(tag, type) {
    switch(type){
        case 2:     // 从队首移除；添加到队尾：该case后不添加break;
            $("tags-show").removeChild($("tags-show").firstElementChild);
        case 1:     // 添加到队尾
            var tagElem = document.createElement("li");
            tagElem.innerText = tag;
            tagElem.onmouseover = changeTagStyle;
            tagElem.onmouseout = changeTagStyleBak;
            tagElem.onclick = removeElem;

            $("tags-show").appendChild(tagElem);
            break;
    }
}

function changeTagStyle(e){
    var node = e.target;

    node.innerText = "点击删除:" + node.innerText;
}

function changeTagStyleBak(e){
    var node = e.target,
        str = node.innerText,
        pos;

    pos = str.indexOf(":");
    node.innerText = str.substring(pos+1);
}

$("tag-input").onkeyup = function(event) {
    var tagValue,
        existed = false,
        type = 1;   // 默认tag操作类型为: 1 - 添加到队尾

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
        if(global_tagArr.length >= 10){
            type = 2;   // tag操作类型: 2 - 删除
            global_tagArr.unshift();
        }

        global_tagArr.push(tagValue);
        renderTags(tagValue, type);
    }
};

// 点击队列中任一个元素，删除
function removeElem(e){
    var node = e.target;
    // ================================================================ notice
    var indexToDel = [].indexOf.call(node.parentNode.children, node);

    alert("删除左起第" + (indexToDel+1) + "个元素：" + global_tagArr[indexToDel]);

    $("tags-show").removeChild($("tags-show").childNodes[indexToDel]);   // 从 DOM 中删除
    global_tagArr.splice(indexToDel, 1);                                 // 从 队列 中删除
}


/***
 * 通过一个Textarea进行兴趣爱好的输入，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为间隔。
 当点击“确认兴趣爱好”的按钮时，将textarea中的输入按照你设定的间隔符，拆解成一个个的爱好，显示在textarea下方
 爱好不能重复，所以在下方呈现前，需要做一个去重
 每个爱好内容需要做trim处理
 最多允许10个兴趣爱好，多于10个时，按照录入的先后顺序，把最前面的删掉
 * */
function unique(arr) {
    var result = [], hash = {};

    global_interestsArr.forEach(function(item){
        hash[item] = true;
    });

    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}


function getInput() {
    var inputStr = $("queue-input").value.trim(),
        inputArr;

    // 按照非数字，非英文字母，非中文进行切分 ================================================== notice
    inputArr = inputStr.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(item) {
        return (item.length != 0)
    });

    // 去重
    return unique(inputArr);
}

function renderQueue(type, value) {
    var divElem = document.createElement("div");
    divElem.className = "elem";
    divElem.innerText = value;
    divElem.onclick = removeElem;

    switch(type) {
        case 1:     // 左侧入，队首
            $("interests-show").insertBefore(divElem, $("interests-show").firstElementChild);
            break;
        case 2:     // 右侧入，队尾
            $("interests-show").appendChild(divElem);
            break;
        case 3:     // 左侧出，队首
            $("interests-show").removeChild($("interests-show").firstElementChild);
            alert("删除左侧第一个元素：" + value);
            break;
        case 4:     // 右侧出，队尾
            $("interests-show").removeChild($("interests-show").lastElementChild);
            alert("删除右侧第一个元素：" + value);
            break;
    }

    $("queue-input").value = "";
}

$("submit").onclick = function() {
    var valueArr = getInput().reverse();

    valueArr.forEach(function(item) {
        global_interestsArr.unshift(item);   // 添加到队首

        renderQueue(1, item);
    });
};