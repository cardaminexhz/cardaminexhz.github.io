var bookObj = {
    title : "hello JS",
    authors : ["xhz", "nfalse", "yingwucat"],
    year : 2016,
    isMagic : true,
    version : "alpha"
};

// argu2：过滤数组
var filterArr = JSON.stringify(bookObj, ["title", "authors"]);
console.log(filterArr);
/* {"title":"hello JS","authors":["xhz","nfalse","yingwucat"]} */
// 只返回过滤数组中列出的属性

// argu2：过滤函数
var filterFunc = JSON.stringify(bookObj, function(key, value){
    switch(key) {
        case "authors":
            return value.join("|");
        case "year":
            return undefined;
        default :
            return value;
    }
});
console.log(filterFunc);
/* {"title":"hello JS","authors":"xhz|nfalse|yingwucat","isMagic":true,"version":"alpha"} */
// key = "year"时，返回 undefined，被过滤掉


// argu3: 缩进 （数字n - n个空格；缩进字符串）
var indent = JSON.stringify(bookObj, null, 4);
console.log(indent);
/*
 {
    "title": "hello JS",
    "authors": [
        "xhz",
        "nfalse",
        "yingwucat"
    ],
    "year": 2016,
    "isMagic": true,
    "version": "alpha"
}
 * */


// toJSON(): 为对象自定义序列化
var bookObjNew = {
    title : "hello JS",
    authors : ["xhz", "nfalse", "yingwucat"],
    year : 2016,
    isMagic : true,
    version : "alpha",
    toJSON : function(){
        return this.title + " -- written by -- " + this.authors.join(", ") + ", version: " + this.version;
    }
};
var toJsonStr = JSON.stringify(bookObjNew);
console.log(toJsonStr);
/* "hello JS -- written by -- xhz, nfalse, yingwucat, version: alpha" */


// 序列化顺序：toJSON() -> 根据argus2序列化 -> 根据argus3格式化
var bookObjAnother  = {
    title : "hello JS",
    authors : ["xhz", "nfalse", "yingwucat"],
    year : 2016,
    isMagic : true,
    version : "alpha",
    toJSON : function(){
        return {
            "title": this.title,
            "authors": this.authors,
            "year": this.year
        };
    }
};
console.log(JSON.stringify(bookObjAnother));
/* {"title":"hello JS","authors":["xhz","nfalse","yingwucat"],"year":2016} */

var toJsonFilter = JSON.stringify(bookObjAnother, ["title", "authors"]);
console.log(toJsonFilter);
/* {"title":"hello JS","authors":["xhz","nfalse","yingwucat"]} */




