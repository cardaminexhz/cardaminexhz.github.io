/**
 * Created by carda on 2016/9/5.
 */


/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
    var i = str.length - 1,
        j = str.length,
        reversedStr = '';

    for(i; i >= 0; i--) {
        if(str.charAt(i) === ' ') {
            j = i;
        } else if(i === 0 || str.charAt(i-1) === ' ') {
            if(reversedStr.length !== 0) {
                reversedStr += ' ';
            }
            reversedStr += str.substring(i, j);
        }
    }
    return reversedStr;
};


// -------------------------------test
var str = "a";
console.log(reverseWords(str));