/**
 * Created by carda on 2016/9/5.
 */


/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();
    var wordsArr = str.split(/\s+/),
        reversedStr = "";
    console.log(wordsArr);

    while(wordsArr.length > 0) {
        reversedStr += " " + wordsArr.pop();
    }

    return reversedStr.trim();
};



// -------------------------------test
var str = "   the sky is    blue   ";
console.log(reverseWords(str));