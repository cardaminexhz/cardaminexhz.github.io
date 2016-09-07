# 104. Maximum Depth of Binary Tree

ref: [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

***

* 递归 recursion
    1. 可以使用递归：每个节点的左孩子和右孩子，自身也是一棵子树
    2. 当前节点的最大深度即 `maxDepth(左子树，右子树) + 1`
    3. 那么需要计算出左子树/右子树的 maxDepth
    4. 递归终止条件，树为空，返回深度为0
    5. 假设树中节点总数 n，
        + `T(n) = O(n)` 因为每个节点只遍历了一次
        + `S(n) = O(logn)` 递归需要的栈空间