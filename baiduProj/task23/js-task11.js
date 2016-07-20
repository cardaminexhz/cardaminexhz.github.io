var $ = function(id) { return document.getElementById(id); },
    rootNode = document.getElementsByClassName("root")[0],
    nodeList = [],
    timer;

$("DFS-btn").onclick = function() {
    init();
    dfTraverse(rootNode);
    render();
}
$("BFS-btn").onclick = function() {
    init();
    bfTraverse(rootNode);
    render();
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

// 颜色渲染
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
