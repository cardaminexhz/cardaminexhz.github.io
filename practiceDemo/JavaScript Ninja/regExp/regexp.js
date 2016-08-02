/**
 * Created by carda on 2016/8/2.
 */

var testStr, newStr, backStr;

/* 1.�к����ַ��� -> �շ�ƴд e.g. border-bottom-width -> borderBottomWidth */
function upper(all, letter, index, sourceStr) {
    console.log(all, letter, index, sourceStr);
    return letter.toUpperCase();
}

testStr = "border-bottom-width";
newStr = testStr.replace(/-(\w)/g, upper);
console.log("convert " + testStr + " to " + newStr);

/* 1-1.�к����ַ��� <- �շ�ƴд e.g. border-bottom-width <- borderBottomWidth */
function back(all, letter, index, sourceStr) {
    console.log(all, letter, index, sourceStr);
    return "-" + letter.toLowerCase();
}

backStr = newStr.replace(/([A-Z])/g, back);
console.log("convert " + newStr + " to " + backStr);


/* 2.ѹ����ѯ�ַ��� e.g. foo=1&foo=2&blah=a&blah=b&foo=3 -> foo=1,2,3&blah=a,b */
var argusObj = {};

// �� foo=1&foo=2&blah=a&blah=b&foo=3 ��ȡ�� k-v��
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

function anotherExtract(all, key, value, index, sourceStr) {  // key, value һ�������Ӧһ������
    console.log(all, key, value, index, sourceStr);

    if(!argusObj.hasOwnProperty(key)) {
        argusObj[key] = [];

    }
    argusObj[key].push(value);
}

// ��k-v�� ����ָ����ʽ
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
//testStr.replace(/([^=&]+\=[^=&]*)/g, extract);         // ÿ��ƥ��һ�������� key = value
                        // replace: ÿ��ƥ�䶼����extract������ֻ��Ҫ�����ĸ����ã�������Ҫʵ���滻�����
testStr.replace(/([^=&]+)=([^=&]*)/g, anotherExtract);   // ÿ���������� key, value
console.log(argusObj);
newStr = convert(argusObj);
console.log(newStr);


/* 3. ȥ���ַ���ǰ�����ո� */
function trim(str) {
    return (str || "").replace(/^\s+|\s+$/g, "");
}

testStr = "     #id div.class ";
newStr = trim(testStr);
console.log(newStr);


/* 4. �����ַ����е��������� */
testStr = "John Smith";
newStr = testStr.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(newStr);