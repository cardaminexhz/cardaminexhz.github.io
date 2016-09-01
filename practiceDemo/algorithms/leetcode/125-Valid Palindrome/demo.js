/**
 * Created by carda on 2016/8/31.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var left = 0,
        right = s.length - 1;

    while (left < right) {
        while ((left < right) && (!isAlphaNumeric(s.charAt(left)))) {
            left++;
        }
        while ((left < right) && (!isAlphaNumeric(s.charAt(right)))) {
            right--;
        }
        if (s.charAt(left).toLowerCase() != s.charAt(right).toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;

};

function isAlphaNumeric(char) {
    return char.match(/[a-zA-Z0-9]/);
}

// ----------------------------------- test
var str = "race a car";
console.log(isPalindrome(str));