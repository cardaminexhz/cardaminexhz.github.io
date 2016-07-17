var $ = function(id) { return document.getElementById(id); },
    rootNode = document.getElementsByClassName("root")[0],
    nodeList = [],      // 全局变量：存储各种遍历顺序下的节点
    timer = null;

window.onload = function() {
    // DLR 前序遍历 degree - left - right
    $("DLR-btn").onclick = function () {
        init();
        preOrder(rootNode);
        render();
    }
    // LDR 中序遍历 left - degree - right
    $("LDR-btn").onclick = function () {
        init();
        inOrder(rootNode);
        render();
    }
    // LRD 后序遍历 left - right -degree
    $("LRD-btn").onclick = function () {
        init();
        postOrder(rootNode);
        render();
    }

}

// 初始化
function init() {
    nodeList.forEach(function(item){
        item.style.backgroundColor = '#fff';
    })
    nodeList = [];
};


// 前序遍历
function preOrder(node) {
    if(node != null) {
        nodeList.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
};

// 中序遍历
function inOrder(node) {
    if(node != null) {
        inOrder(node.firstElementChild);
        nodeList.push(node);
        inOrder(node.lastElementChild);
    }
}

// 后序遍历
function postOrder(node) {
    if(node != null) {
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        nodeList.push(node);
    }
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
};

