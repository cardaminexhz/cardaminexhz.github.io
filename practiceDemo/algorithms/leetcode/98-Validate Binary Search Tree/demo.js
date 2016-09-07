/**
 * Created by carda on 2016/9/5.
 */


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_VALUE);
};


function valid(node, low, high) {
    if(node === null) return true;
    return (node.val > low) && (node.val < high)
            && valid(node.left, low, node.val)
            && valid(node.right, node.val, high);
}

// -------------------------------- test
var root = new TreeNode(0),
    left = new TreeNode(2),
    right = new TreeNode(3);

/*root.left = left;
root.right = right;*/

console.log(isValidBST(root));