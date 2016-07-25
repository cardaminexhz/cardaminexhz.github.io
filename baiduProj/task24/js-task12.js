var $ = function(id) { return document.getElementById(id); },
    rootNode = document.getElementsByClassName("root")[0],
    nodeList = [],  // 存储按一定顺序遍历的节点
    timer,
    searchInfo,
    flagArr = [],   // 辅助数组：节点值与搜索内容是否匹配? true : false
    selectedElem;   // 存储选中的元素

// 遍历 traverse
$("DFT-btn").onclick = function() {
    init();
    dfTraverse(rootNode);
    render();
}
$("BFT-btn").onclick = function() {
    init();
    bfTraverse(rootNode);
    render();
}

// 搜索 search
$("DFS-btn").onclick = function() {
    searchInfo = $("search-input").value;

    init();
    dfTraverse(rootNode);
    nodeList.forEach(function(item) {
        flagArr.push( item.firstChild.nodeValue.trim().toLowerCase() === searchInfo.toLowerCase() );  // 忽略大小写
    })
    renderSearch();
}
$("BFS-btn").onclick = function() {
    searchInfo = $("search-input").value;

    init();
    bfTraverse(rootNode);
    nodeList.forEach(function(item) {
        flagArr.push( item.firstChild.nodeValue.trim().toLowerCase() === searchInfo.toLowerCase() );  // 忽略大小写
    })
    renderSearch();
}

// 删除节点及其子节点
$("DELETE-btn").onclick = function() {
    if(selectedElem) {
        var parent = selectedElem.parentNode;
        parent.removeChild(selectedElem);
        selectedElem = undefined;
    } else {
        alert("请选择要删除的节点");
    }
}

// 在选中节点下增加子节点
$("ADD-btn").onclick = function() {
    var nodeValue = $("add-input").value,
        newDiv;

    if(!nodeValue) {
        alert("请输入要添加的节点内容");
        return;
    }
    if(!selectedElem) {
        alert("请选择要添加子节点的节点");
        return;
    }

    newDiv = document.createElement("div");
    newDiv.innerText = nodeValue;

    selectedElem.appendChild(newDiv);

    clearResult();
    selectedElem.style.backgroundColor = '#fef9d1';
    $("add-input").value = '';

}

// 深度优先遍历 depth - first  栈-递归
function dfTraverse (node) {
    if(node) {
        nodeList.push(node);
        for(var i = 0; i < node.children.length; i++) {
            dfTraverse(node.children[i]);
        }
    }
}

// 广度优先遍历 breadth - first  队列
function bfTraverse (rootNode) {
    var queue = [],
        visitNode;

    queue.push(rootNode);
    while(queue.length) {
        visitNode = queue.shift();
        nodeList.push(visitNode);

        for(var i = 0; i < visitNode.children.length; i++) {
            queue.push(visitNode.children[i]);
        }
    }
}


// 初始化
function init() {
    nodeList.forEach(function(item){
        item.style.backgroundColor = '#fff';
    });
    nodeList = [];
}

// 遍历：颜色渲染
function render() {
    var i = 0;
    nodeList[i].style.backgroundColor = 'blue';
    timer = setInterval(function(){
        i++;
        if(i < nodeList.length) {
            nodeList[i-1].style.backgroundColor = '#fff';
            nodeList[i].style.backgroundColor = 'blue';
        } else {
            clearInterval(timer);
            nodeList[nodeList.length-1].style.backgroundColor = '#fff';
        }
    }, 1000)
}

// 搜索：渲染
function renderSearch() {
    var i = 0;
    nodeList[i].style.backgroundColor = (flagArr[i] ? 'red' : 'blue');
    timer = setInterval(function(){
        i++;
        if(i < nodeList.length) {
            nodeList[i - 1].style.backgroundColor = '#fff';
            nodeList[i].style.backgroundColor = (flagArr[i] ? 'red' : 'blue');

        } else {
            clearInterval(timer);
            nodeList[nodeList.length-1].style.backgroundColor = '#fff';

            if( flagArr.every(function(item){ return item == false; }) ) {
                alert("未找到匹配 " + searchInfo + " 的元素");
            }
        }
    }, 500)
}


// 点击box，背景色改变
var divNodes = document.getElementsByTagName("div");

for(var i = 0; i < divNodes.length; i++) {
    divNodes[i].addEventListener("click", highLightElem, false);
}

function highLightElem(e) {
    clearResult();

    // 新的选中元素
    selectedElem = e.target;
    e.stopPropagation();//阻止事件冒泡
    selectedElem.style.backgroundColor = '#fef9d1';
}

function clearResult() {
    var allDivElems = document.getElementsByTagName("div");
    for(var i = 0; i < allDivElems.length; i++) {
        allDivElems[i].style.backgroundColor = '#fff';
    }
}




