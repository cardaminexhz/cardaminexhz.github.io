/**
 * Created by carda on 2016/9/1.
 */


//  '(', ')', '{', '}', '[' and ']'

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [],
        set = {')': '(', '}': '{', ']': '['};

    if (s.length % 2 !== 0) {
        return false;
    }

    if (s.charAt(0) in set) {
        return false;
    }

    for (var i = 0; i < s.length; i++) {
        if(!(s.charAt(i) in set)) {
            stack.push(s.charAt(i));
        } else if(stack.pop() != set[s.charAt(i)]) {
            return false;
        }
    }

    return (stack.length === 0);
};


// -------------------------------test
var str = "([)]";
console.log(isValid(str));