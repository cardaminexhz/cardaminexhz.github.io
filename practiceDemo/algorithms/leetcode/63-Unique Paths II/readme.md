# 63. Unique Paths II

ref: [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)

Follow up for &quot;Unique Paths&quot;:

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

    [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]

The total number of unique paths is 2.

Note: m and n will be at most 100.

***

* JS 数组下标越界 `arr[m][n]`
    > Uncaught TypeError: Cannot read property '2' of undefined
    
* JS 二维数组
    + 创建一个 m+1 行，n+1 列的二位数组，初始化为1
        
            var mem = new Array(m);
            for(var i = 0; i < m+1; i++) {
                mem[i] = new Array(n);
                for(var j = 0; j < n+1; j++) {
                    mem[i][j] = 0;
                }
            }
        
* 思路：
    + 从62题 `Bottom-up dynamic programming` 中扩展来
    + 只需要在遇到障碍时将路径总数置为0
        见[demo.js](https://github.com/cardaminexhz/cardaminexhz.github.io/blob/master/practiceDemo/algorithms/leetcode/63-Unique%20Paths%20II/demo.js)