/**
 * Created by carda on 2016/8/2.
 */

var testStr, newStr, backStr;

/* 1.中横线字符串 -> 驼峰拼写 e.g. border-bottom-width -> borderBottomWidth */
function upper(all, letter, index, sourceStr) {
    console.log(all, letter, index, sourceStr);
    return letter.toUpperCase();
}

testStr = "border-bottom-width";
newStr = testStr.replace(/-(\w)/g, upper);
console.log("convert " + testStr + " to " + newStr);

/* 1-1.中横线字符串 <- 驼峰拼写 e.g. border-bottom-width <- borderBottomWidth */
function back(all, letter, index, sourceStr) {
    console.log(all, letter, index, sourceStr);
    return "-" + letter.toLowerCase();
}

backStr = newStr.replace(/([A-Z])/g, back);
console.log("convert " + newStr + " to " + backStr);


/* 2.压缩查询字符串 e.g. foo=1&foo=2&blah=a&blah=b&foo=3 -> foo=1,2,3&blah=a,b */
var argusObj = {};

// 将 foo=1&foo=2&blah=a&blah=b&foo=3 提取出 k-v对
function extract(all, phrase, index, sourceStr) {            // phrase
    console.log(all, phrase, index, sourceStr);
    var key, value,
        regExp = /(\w+)\=(\w*)/;

    key = phrase.match(regExp)[1];
    value = phrase.match(regExp)[2];

    if(!argusObj.hasOwnProperty(key)) {
        argusObj[key] = [];

    }
    argusObj[key].push(value);
}

function anotherExtract(all, key, value, index, sourceStr) {  // key, value 一个捕获对应一个参数
    console.log(all, key, value, index, sourceStr);

    if(!argusObj.hasOwnProperty(key)) {
        argusObj[key] = [];

    }
    argusObj[key].push(value);
}

// 将k-v对 生成指定格式
function convert(obj) {
    var result = [];

    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            result.push( key + "=" + obj[key].join(",") );
        }
    }
    return result.join("&");
}

testStr = "foo=1&foo=2&blah=a&blah=b&foo=3";   // foo=1,2,3&blah=a,b
//testStr.replace(/([^=&]+\=[^=&]*)/g, extract);         // 每次匹配一个捕获组 key = value
                        // replace: 每次匹配都调用extract，这里只需要函数的副作用，而不需要实际替换结果；
testStr.replace(/([^=&]+)=([^=&]*)/g, anotherExtract);   // 每次两个捕获 key, value
console.log(argusObj);
newStr = convert(argusObj);
console.log(newStr);


/* 3. 去除字符串前后多余空格 */
function trim(str) {
    return (str || "").replace(/^\s+|\s+$/g, "");
}

testStr = "     #id div.class ";
newStr = trim(testStr);
console.log(newStr);


/* 4. 交换字符串中的两个单词 */
testStr = "John Smith";
newStr = testStr.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(newStr);