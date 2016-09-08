/**
 * Created by carda on 2016/9/8.
 *
 * backTrack
 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return backTrack(0, 0, m, n);
};

/**
 * @param {number} r   row number of the current point
 * @param {number} c   column number of the current point
 * @param {number} m
 * @param {number} n
 * */
function backTrack(r, c, m, n) {
    if(r === m-1 && c === n-1) return 1;
    if(r >= m || c >= n) return 0;
    return backTrack(r+1, c, m, n) + backTrack(r, c+1, m, n);
}


// ----------------------- test
console.log(uniquePaths(2, 2));