/**
 * Created by carda on 2016/9/7.
 */


/**
 * T(n)? S(n)?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    return climbStairs(n-1) + climbStairs(n-2);
};


/**
 * T(n) = O(n), S(n) = O(n)
 * */
var climbStairs1 = function(n) {
    var arr = [0, 1, 2];

    for(var i = 3; i <= n; i++ ) {
        arr[i] = arr[i-2] + arr[i-1];
    }

    return arr[n];
};


/**
 * T(n) = O(n), S(n) = O(1)
 * */
var climbStairs2 = function(n) {
    var n_1, n_2, tmp;

    n_2 = 1;
    n_1 = 1;
    for(var i = 2; i <= n; i++) {
        tmp = n_1;
        n_1 = n_1 + n_2;
        n_2 = tmp;
    }

    return n_1;
};



// ------------------------------ test
console.log(climbStairs(15));