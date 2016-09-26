/**
 * Created by carda on 2016/9/26.
 * @comment deep clone of nodes, object literals, dates, regular expressions, arrays and generic objects
 */


function deepClone(obj) {

    // null, undefined || non-object: NaN, number, string || function
    if(!obj || typeof obj !== "object" || isFunction(obj)) {
        return obj;
    }

    // DOM Node
    if(obj.nodeType && "cloneNode" in obj) {
        return obj.cloneNode(true);
    }

    // Date
    if(isDate(obj)) {
        return new Date(obj.getTime());
    }

    // RegExp
    if(isRegExp(obj)) {
        var flags = [];
        if(obj.global)     flags.push("g");
        if(obj.ignoreCase) flags.push("i");
        if(obj.multiline)  flags.push("m");
        return new RegExp(obj.source, flags.join(""));
    }

    // 对象 / array object
    var result = isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

    for(var prop in obj) {
        result[prop] = deepClone(obj[prop]);
    }

    return result;
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}

function isDate(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
}

function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
}

function isFunction(obj) {
    return Object.prototype.toString.call(obj) === "[object function]";
}

// ---------------------------- test
var copy = deepClone({
    one : {
        'one-one' : new String("hello"),
        'one-two' : [
            "one", "two", true, "four"
        ]
    },
    two : document.createElement("div"),
    three : [
        {
            name : "three-one",
            number : new Number("100"),
            obj : new function() {
                this.name = "Object test";
            }
        }
    ]
});
console.log(copy);
