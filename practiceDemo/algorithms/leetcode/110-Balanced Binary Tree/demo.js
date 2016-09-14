/**
 * Created by carda on 2016/9/14.
 */

// * Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null)  return true;

    return (Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1)
            && isBalanced(root.left)
            && isBalanced(root.right);

};

function maxDepth(node) {
    if(node === null) return 0;
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}


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
n2.left = n5;

console.log(isBalanced(root));