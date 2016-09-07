/**
 * Created by carda on 2016/9/7.
 */


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    var queue = [],
        node, rightMostNode = root,
        depth = 1;

    if(root === null) { return 0; }
    queue.push(root);
    while(queue.length !== 0) {
        node = queue.shift();
        if(node.left !== null) { queue.push(node.left); }
        if(node.right !== null) { queue.push(node.right); }
        if (node === rightMostNode) {
            depth++;
            rightMostNode = (node.right !== null) ? node.right : node.left;
        }
    }
    return depth;
};

// ----------------------------- test
var root = new TreeNode("0"),
    n1 = new TreeNode("1"),
    n2 = new TreeNode("2"),
    n3 = new TreeNode("3"),
    n4 = new TreeNode("4"),
    n5 = new TreeNode("5");

root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
n3.left = n5;

console.log(minDepth(root));