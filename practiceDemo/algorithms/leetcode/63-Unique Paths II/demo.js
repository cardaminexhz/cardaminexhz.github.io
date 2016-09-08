/**
 * Created by carda on 2016/9/8.
 */


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length;
    if (m === 0) return 0;
    var n = obstacleGrid[0].length;

    var mem = new Array(m);
    for(var i = 0; i < m+1; i++) {
        mem[i] = new Array(n);
        for(var j = 0; j < n+1; j++) {
            mem[i][j] = 0;
        }
    }

    mem[m-1][n] = 1;
    for(var p = m-1; p >= 0; p--) {
        for(var q = n-1; q >= 0; q--) {
            mem[p][q] = (obstacleGrid[p][q] === 1) ? 0 : (mem[p][q+1] + mem[p+1][q]);
        }
    }

    return mem[0][0];
};



// ------------------------ test
var arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];
console.log(uniquePathsWithObstacles(arr));