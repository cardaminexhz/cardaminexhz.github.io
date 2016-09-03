/**
 * Created by carda on 2016/9/2.
 */


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var i = 0, j = 0,
        matched = false;

    if(haystack.length < needle.length) {
        return -1;
    }

    while(i < haystack.length && j < needle.length) {
        if(haystack[i] !== needle[j]) {
            if(matched) {
                i = i - (j-1);
                j = 0 ;
                matched = false;
            } else {
                i++;
            }
        } else if(haystack[i] === needle[j]){
            matched = true;
            i++;
            j++;
        }
    }
    if(i < needle.length) {
        return (i - needle.length);
    }
    if(j < needle.length) {
        return -1;
    }
    return (i - needle.length);

};


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {
    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
            if (j == needle.length) return i;
            if (i + j == haystack.length) return -1;
            if (needle.charAt(j) != haystack.charAt(i + j)) break;
        }
    }
};



// ------------------------------ test
var destStr = "mississippi",
    subStr = "issip";

console.log(strStr(destStr, subStr));
console.log(strStr2(destStr, subStr));