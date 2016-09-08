/**
 * Created by carda on 2016/9/8.
 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var a = b = c = 1;
    for(var i = 1; i <= m-1; i++){
        a = a*i;
    }

    for(var j = 1; j <= n-1; j++){
        b = b*j;
    }

    for(var h = 1; h <= m+n-2; h++){
        c = c*h;
    }

    return (c / (a*b));
};