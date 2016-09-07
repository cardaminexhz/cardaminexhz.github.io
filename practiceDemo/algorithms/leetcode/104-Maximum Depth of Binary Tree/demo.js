/**
 * Created by carda on 2016/9/6.
 */


// * Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
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

console.log(maxDepth(root));
