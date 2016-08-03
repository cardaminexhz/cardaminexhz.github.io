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
console.log("convert " + testStr + " to " + newStr + "\n=====");

/* 1-1.�к����ַ��� <- �շ�ƴд e.g. border-bottom-width <- borderBottomWidth */
function back(all, letter, index, sourceStr) {
    console.log(all, letter, index, sourceStr);
    return "-" + letter.toLowerCase();
}

backStr = newStr.replace(/([A-Z])/g, back);
console.log("convert " + newStr + " to " + backStr + "\n=====");


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
console.log("convert " + testStr + " to " + newStr + "\n=====");


/* 3. ȥ���ַ���ǰ�����ո� */
function trim(str) {
    return (str || "").replace(/^\s+|\s+$/g, "");
}

testStr = "     #id div.class ";
newStr = trim(testStr);
console.log("convert " + testStr + " to " + newStr + "\n=====");


/* 4. �滻�ַ� $n�������� - �����ַ����е��������� */
testStr = "John Smith";
newStr = testStr.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log("$n -- convert " + testStr + " to " + newStr + "\n=====");

/* 4-1 �滻�ַ� $n - ������� */
testStr = "JohnSmith@126.com";
newStr = testStr.replace(/(.+)(@).*/, "$2$1");
console.log("$n -- convert " + testStr + " to " + newStr + "\n=====");

/* 4-2 �滻�ַ� $&��ƥ����ַ��� */
newStr = testStr.replace(/smith/i, "{$&}");
console.log("$& -- convert " + testStr + " to " + newStr + "\n=====");

/* 4-3 �滻�ַ� $` $'��ƥ�� - ʹ��$`��$'�ַ��滻���� */
testStr = "abc";
newStr = testStr.replace(/b/, "$`");
console.log("$` -- convert " + testStr + " to " + newStr);
newStr = testStr.replace(/b/, "$'");
console.log("$' -- convert " + testStr + " to " + newStr + "\n=====");


/* 4-4  ɾ��������ʽ�еĵ����� */
testStr = '<span style="font-family:\'msyh\';">;demo</span>';

/* .1 ��̰��ƥ�� nogreedy a+? */
function remove1(all, capture, index, sourceStr) {
    console.log("no greedy match: ", all, capture, index, sourceStr);
    return capture.replace(/'/g, "");
}
newStr = testStr.replace(/(:.*?;)/g, remove1);
console.log("convert " + testStr + " to " + newStr + "\n=====");

/* .2 */
function remove2(all, index, sourceStr) {
    console.log(all, index, sourceStr);
    return all.replace(/\'/g, "");
}
newStr = testStr.replace(/\'[^']+\'/g, remove2);
console.log("convert " + testStr + " to " + newStr + "\n=====");

/* 5 ϴ�˿�: ��ThisNimojs-JavaScriptʹ�������滻�� TJhaivsaNSicmroijpst */
testStr = "ThisNimojs-JavaScript";

function mixStr(all, str1, str2, index, sourceStr) {
    console.log(all, str1, str2, index, sourceStr);

    var arr1, arr2, arrMix=[], minLen;

    arr1 = str1.split("");
    arr2 = str2.split("");
    minLen = arr1.length < arr2.length ? arr1.length : arr2.length;

    for(var i = 0; i < minLen; i++) {
        arrMix.push(arr1[i], arr2[i]);
    }
    if(arr1.length != arr2.length) {
        arrMix = arrMix.concat(arr1.length > arr2.length ? arr1.slice(minLen - 1) : arr2.slice(minLen - 1));
    }

    return arrMix.join("");
}
newStr = testStr.replace(/(\w+)-(\w+)/, mixStr);
console.log("convert " + testStr + " to " + newStr + "\n=====");
