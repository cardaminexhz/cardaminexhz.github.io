/**
 * Created by carda on 2016/9/8.
 */

// ----------------------------- DP - top down
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var mem = [];
    for(var i = 0; i < m+1; i++) {
        mem[i] = [];
        for(var j = 0; j < n+1; j++) {
            mem[i][j] = -1;
        }
    }
    return backTrack(0, 0, m, n, mem);
};

/**
 * @param {number} r   row number of the current point
 * @param {number} c   column number of the current point
 * @param {number} m
 * @param {number} n
 * @param {array} mem
 * */
function backTrack(r, c, m, n, mem) {
    if(r === m-1 && c === n-1) return 1;
    if(r >= m || c >= n) return 0;

    if(mem[r+1][c] === -1) {
        mem[r+1][c] = backTrack(r+1, c, m, n, mem);
    }
    if(mem[r][c+1] === -1) {
        mem[r][c+1] = backTrack(r, c+1, m, n, mem);
    }

    return mem[r+1][c] + mem[r][c+1];
}

// ----------------------------- DP - bottom up
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths1 = function(m, n) {
    var mem = [];
    for(var i = 0; i < m+1; i++) {
        mem[i] = [];
        for(var j = 0; j < n+1; j++) {
            mem[i][j] = 0;
        }
    }

    mem[m-1][n] = 1;
    for(var p = m-1; p >= 0; p--) {
        for(var q = n-1; q >= 0; q--) {
            mem[p][q] = mem[p][q+1] + mem[p+1][q];
        }
    }

    return mem[0][0];
};


// ----------------------- test
console.log(uniquePaths(1, 2));