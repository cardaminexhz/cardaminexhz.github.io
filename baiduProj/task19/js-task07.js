/**
 * Created by cardaminexhz on 2016/6/8.
 */

// 全局变量，模拟队列
var queue = [20, 55, 35];

var $ = function(id){
    return document.getElementById(id);
};

// 四个按钮的相应事件
// 左侧入
$("left-in").onclick = function() {
    var value = $("queue-input").value.trim();
    var numPattern = /^\d+$/;
    if(!numPattern.test(value)){
        alert("请输入数字");
        $("queue-input").value = "";
        return;
    }
    if(parseInt(value) < 10 || parseInt(value) > 100){
        alert("数字的范围：10-100");
        $("queue-input").value = "";
        return;
    }
    if(queue.length > 60) {
        alert("最多对60个元素排序");
        $("queue-input").value = "";
        return;
    }

    queue.unshift(value);   // 左侧入，添加到队首

    renderQueue(1, value);
};
// 右侧入
$("right-in").onclick = function() {
    var value = $("queue-input").value.trim();
    var numPattern = /^\d+$/;
    if(!numPattern.test(value)){
        alert("请输入数字");
        $("queue-input").value = "";
        return;
    }
    if(parseInt(value) < 10 || parseInt(value) > 100){
        alert("数字的范围：10-100");
        $("queue-input").value = "";
        return;
    }
    if(queue.length > 60) {
        alert("最多对60个元素排序");
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
    divElem.style.height = value + "px";
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
    // ================================================================
    var indexToDel = [].indexOf.call(node.parentNode.children, node);

    alert("删除左起第" + (indexToDel+1) + "个元素：" + queue[indexToDel]);

    $("queue-show").removeChild($("queue-show").childNodes[indexToDel]);   // 从 DOM 中删除
    queue.splice(indexToDel, 1);                                           // 从 队列 中删除
}


$("bubble-sort").onclick = function() {
    bubbleSort();
};


function bubbleSort(){
    var len = queue.length;
    // 标志一次循环中是否进行了交换
    var  unSequenced = true;
    // 每次循环都将最大值移到数组尾，下一次循环的元素数减1
    // 若上一次循环未交换任何元素，说明已有序
    while( len - 1 > 0 && unSequenced ) {
        unSequenced = false;
        // 两两比较相邻元素，较大值后移
        for(var j = 0; j < len - 1; j++) {
            console.log(queue[j], queue[j+1]);
            if(queue[j] > queue[j+1]) {
                swap(queue, j, j+1);
                //setTimeout("swap(queue, j, j+1)", 2000);
                unSequenced = true;
            }
        }
        len--;
        // 每次循环后打印排序结果
        console.log(queue);
    }
}

function swap(arr, i, j) {

    // 交换数组元素
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

    // 操作 DOM
    var nodeI = $("queue-show").children[i];
    var nodeJ = $("queue-show").children[j];
    $("queue-show").insertBefore(nodeJ, nodeI);   // 将小值(nodeJ)插入到大值(nodeI)之前

}

