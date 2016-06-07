/**
 * Created by eversec on 2016/6/7.
 */

// 全局的队列 array: 左侧队首，右侧队尾
var queue = [];

var $ = function(id){
    return document.getElementById(id);
}

// 给四个按钮绑定事件
// 左侧 入
$("left-in").onclick = function() {
    // TODO: 对用户输入的数字做校验
    var value= $("queue-input").value;
    queue.unshift(value);   // 添加到队首
    console.log("left in ");
    console.log(queue);

    renderQueue(1, value);
}
// 右侧 入
$("right-in").onclick = function() {
    var value = $("queue-input").value;
    queue.push(value);      // 添加到队尾
    console.log("right in");
    console.log(queue);

    renderQueue(2, value);
}
// 左侧 出
$("left-out").onclick = function () {
    var value = queue.shift();          // 队首移除
    console.log("left out");
    console.log(queue);

    renderQueue(3, value);
}
// 右侧 出
$("right-out").onclick = function() {
    var value = queue.pop();            // 队尾移除
    console.log("right out");
    console.log(queue);

    renderQueue(4, value);
}

// TODO: 如何给每个元素绑定事件？
function removeElem(){
    alert("123");
    //$("queue-show").removeChild();
}


function renderQueue(type, value) {
    var divElem = document.createElement("div");
    divElem.className = "elem";
    divElem.innerText = value;
    divElem.onclick = removeElem;

    switch(type) {
        case 1:     // 左侧入 - 队首入
            $("queue-show").insertBefore(divElem, $("queue-show").firstElementChild);
            break;
        case 2:     // 右侧入 - 队尾入
            $("queue-show").appendChild(divElem);
            break;
        case 3:     // 左侧出 - 队首出
            $("queue-show").removeChild($("queue-show").firstElementChild);
            alert("删除队列左侧第一个元素：" + value);
            break;
        case 4:     // 右侧出 - 队尾出
            $("queue-show").removeChild($("queue-show").lastElementChild);
            alert("删除队列右侧第一个元素：" + value);
            break;
    }
}