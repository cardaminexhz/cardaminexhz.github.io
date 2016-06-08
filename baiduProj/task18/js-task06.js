/**
 * Created by eversec on 2016/6/7.
 */

// 全局变量，模拟队列
var queue = [];

var $ = function(id){
    return document.getElementById(id);
};

// 四个按钮的相应事件
// 左侧入
$("left-in").onclick = function() {
    var value = $("queue-input").value;
    var numPattern = /^\d+$/;
    if(!numPattern.test(value)){
        alert("请输入数字");
        $("queue-input").value = "";
        return;
    }

    queue.unshift(value);   // 左侧入，添加到队首

    renderQueue(1, value);
};
// 右侧入
$("right-in").onclick = function() {
    var value = $("queue-input").value;
    var numPattern = /^\d+$/;
    if(!numPattern.test(value)){
        alert("请输入数字");
        $("queue-input").value = "";
        return;
    }

    queue.push(value);      // 右侧入，添加到队尾

    renderQueue(2, value);
};
// 左侧出
$("left-out").onclick = function () {
    var value = queue.shift();          // 左侧出，从队首移除项

    renderQueue(3, value);
};
// 右侧出
$("right-out").onclick = function() {
    var value = queue.pop();            // 右侧出，从队尾移除项

    renderQueue(4, value);
};


function renderQueue(type, value) {
    var divElem = document.createElement("div");
    divElem.className = "elem";
    divElem.innerText = value;
    divElem.onclick = removeElem;

    switch(type) {
        case 1:     // 左侧入，队首
            $("queue-show").insertBefore(divElem, $("queue-show").firstElementChild);
            break;
        case 2:     // 右侧入，队尾
            $("queue-show").appendChild(divElem);
            break;
        case 3:     // 左侧出，队首
            $("queue-show").removeChild($("queue-show").firstElementChild);
            alert("删除左侧第一个元素：" + value);
            break;
        case 4:     // 右侧出，队尾
            $("queue-show").removeChild($("queue-show").lastElementChild);
            alert("删除右侧第一个元素：" + value);
            break;
    }

    $("queue-input").value = "";
}


// 点击队列中任一个元素，删除
function removeElem(e){
    var node = e.target;
    var indexToDel = [].indexOf.call(node.parentNode.children, node);
    alert("删除左起第" + (indexToDel+1) + "个元素：" + queue[indexToDel]);

    $("queue-show").removeChild($("queue-show").childNodes[indexToDel]);   // 从 DOM 中删除
    queue.splice(indexToDel, 1);                                           // 从 队列 中删除
}
