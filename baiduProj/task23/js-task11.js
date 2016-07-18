var $ = function(id) { return document.getElementById(id); },
    rootNode = document.getElementsByClassName("root")[0],
    nodeList = [],
    timer;

$("DFS-btn").onclick = function() {
    dfTraverse(rootNode);
    console.log(nodeList);
}

// 深度优先遍历 depth - first
function dfTraverse (node) {
    if((nodeList.length != 0) && (node === rootNode)) {
        return;
    }
    // 找到最左子节点
    while( (node != null) && (node.childElementCount != 0) ) {
        dfTraverse(node.firstElementChild);
    }
    nodeList.push(node);
    // 同胞节点
    while(node.nextElementSibling != null) {
        dfTraverse(node.nextElementSibling);
    }
    // 父节点
    dfTraverse(node.parentElement);
}