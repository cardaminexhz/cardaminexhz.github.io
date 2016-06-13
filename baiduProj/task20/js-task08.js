/**
 * Created by cardaminexhz on 2016/6/13.
 */

// 全局变量，模拟队列
var queue = [];

var $ = function(id){
    return document.getElementById(id);
};


function getInput() {
    var inputStr = $("queue-input").value.trim();
    // 按照非数字，非英文字母，非中文进行切分 ================================================== notice
    return inputStr.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(item) {
        return (item.length != 0)
    })
}

// 四个按钮的相应事件
// 左侧入
$("left-in").onclick = function() {
    var valueArr = getInput();

    valueArr.forEach(function(item) {
        queue.unshift(item);   // 左侧入，添加到队首

        renderQueue(1, item);
    });
};
// 右侧入
$("right-in").onclick = function() {
    var valueArr = getInput();

    valueArr.forEach(function(item) {
        queue.push(item);      // 右侧入，添加到队尾

        renderQueue(2, item);
    });
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
    // ================================================================ notice
    var indexToDel = [].indexOf.call(node.parentNode.children, node);

    alert("删除左起第" + (indexToDel+1) + "个元素：" + queue[indexToDel]);

    $("queue-show").removeChild($("queue-show").childNodes[indexToDel]);   // 从 DOM 中删除
    queue.splice(indexToDel, 1);                                           // 从 队列 中删除
}


function render(searchValue) {
    $("queue-show").innerHTML = queue.map(function (item) {
        if(searchValue.length > 0) {
            item = item.replace(new RegExp(searchValue, "g"), '<span class="matched">' + searchValue + '</span>');
            return '<div class="elem">' + item + '</div>';
        }
    }).join("");
}

// 模糊查询匹配
$("search-btn").onclick = function() {
    var searchValue = $("search-input").value;

    render(searchValue);   // 提取出 render(), 表现和逻辑分离

/*    // 下列代码存在的问题：当再次查询，进行匹配标识时，如何去掉上一次的标识（<span class="matched">）
      for(var i = 0; i < $("queue-show").childElementCount; i++) {
        var node = $("queue-show").children[i];
        var nodeValue = node.innerText;
        if(nodeValue.indexOf(searchValue) != -1) {
            node.innerHTML = nodeValue.replace(new RegExp(searchValue, "g"), '<span class="matched">' + searchValue + '</span>');
        }
    }*/
};
