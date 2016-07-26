

// TreeNode 构造函数
function TreeNode(obj) {
    this.parent = obj.parent;
    this.childs = obj.childs || [];
    this.data = obj.data || "";
    this.selfElement = obj.selfElement;
    //this.selfElement.TreeNode = this;
}

// 原型封装公共操作
TreeNode.prototype = {
    constructor: TreeNode,

    // 解耦样式操作，四个参数表示是否改变箭头、可见性、改为高亮、改为普通，后两个参数可省略
    render: function (arrow, visibility, toHighlight, deHighlight) {
        if(this.isLeaf) {
            this.selfElement.getElementsByClassName("arrow")[0].className = "arrow empty-arrow";
        }
    },

    // 展开、收拢结点
    toggleFold: function () {
        if (this.isLeaf()) return this; // 叶节点，无需操作
        // 改变所有子节点的可见状态
        for (var i=0;i<this.childs.length;i++)
            this.childs[i].render(false, true);
        // 渲染本节点的箭头
        this.render(true, false);
        return this; // 返回自身，以便链式操作
    },

    // 判断是否为叶节点
    isLeaf: function() {
        return this.childElementCount == 0;
    },
    // 判断是否处于折叠状态
    isFolded: function() {
        if(this.isLeaf) return false;
        return true;
    },

    addChild: function(text) {
        var newNode, newNodeHeader, newArrow, newNodeTitle, newAddImg, newDelImg;

        if (text == null) return this;
        if (text.trim() == "") {
            alert("节点内容不能为空！");
            return this;
        }
        // 先增加子节点，再渲染自身样式
        // 若当前节点关闭，则将其展开
        if(!this.isLeaf() && this.isFolded()){
            //this.toggleFold();
        }

        newNode = document.createElement("div");
        newNode.className = "nodebody-visible";
        newNodeHeader = document.createElement("label");
        newNodeHeader.className = "node-header";
        newArrow = document.createElement("div");
        newArrow.className = "arrow right-arrow";
        newNodeTitle = document.createElement("span");
        newNodeTitle.className = "node-title";
        newNodeTitle.innerText = text;
        newAddImg = document.createElement("img");
        newAddImg.class = "add-icon";
        newAddImg.setAttribute("src", "img/add.png");
        newDelImg = document.createElement("img");
        newDelImg.class = "delete-icon";
        newDelImg.setAttribute("src", "img/delete.png");

        newNodeHeader.appendChild(newArrow);
        newNodeHeader.appendChild(newNodeTitle);
        newNodeHeader.appendChild(newAddImg);
        newNodeHeader.appendChild(newDelImg);
        newNode.appendChild(newNodeHeader);

        console.log(this)
        console.log(this.selfElement)
        this.selfElement.appendChild(newNode);
        // 创建对应的TreeNode对象并添加到子节点队列
        this.childs.push(new TreeNode({parent: this, childs: [], data: text, selfElement: newNode}));
        // 渲染自身样式
        this.render(true, false);
        return this; // 返回自身，以便链式操作
    },
}


// 创建根节点对应的TreeNode对象
var root = new TreeNode({
    parent: null,
    childs: [],
    data: "前端攻城狮",
    selfElement: document.getElementsByClassName("nodebody-visible")[0]
});
// 为root绑定事件代理，处理所有节点的点击事件
addEvent(root.selfElement, "click", function (e) {
    var target = e.target || e.srcElement;
    var domNode = target;
    while (domNode.className.indexOf("nodebody") == -1) domNode = domNode.parentNode; // 找到类名含有nodebody前缀的DOM结点
    selectedNode = domNode.TreeNode; // 获取DOM对象对应的TreeNode对象
    // 如果点在节点文字或箭头上
    if (target.className.indexOf("node-title") != -1 || target.className.indexOf("arrow") != -1) {
        selectedNode.toggleFold(); // 触发toggle操作
    }
    else if (target.className == "addIcon") { // 点在加号上
        selectedNode.addChild(prompt("请输入子结点的内容："));
    }
    else if (target.className == "deleteIcon") { // 点在减号上
        selectedNode.deleteNode();
    }
});

//动态生成Demo树
root.addChild("技术").addChild("IT公司").addChild("谈笑风生");
root.childs[0].addChild("HTML5").addChild("CSS3").addChild("JavaScript").addChild("PHP").addChild("Node.JS").toggleFold();
root.childs[0].childs[4].addChild("JavaScript").toggleFold();
root.childs[1].addChild("百度").addChild("腾讯").addChild("大众点评").toggleFold();
root.childs[2].addChild("身经百战").addChild("学习一个").addChild("吟两句诗").toggleFold();
root.childs[2].childs[2].addChild("苟利国家生死以").toggleFold();


// 跨浏览器兼容的工具函数
function addEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
    }
    else {
        element["on" + type] = handler;
    }
}