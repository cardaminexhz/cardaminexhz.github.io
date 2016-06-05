title: JS

date: 2016-6-1 22:59

tags: dailytask,

---

* __JS 正则匹配 中文__  
定义 RegExp: RegExp 对象用于存储检索模式。  


    var patt1=new RegExp("e");
    document.write(patt1.test("The best things in life are free")); 
    // 定义了名为 patt1 的 RegExp 对象，其模式是 "e"; 结果:true，在要检索的字符串中找到了字符 "e"。  

new RegExp() 的时候做了什么操作  


    // new RegExp("^([A-Za-z]+\\s?)*[A-Za-z]$")
    // 才等价于 /^([A-Za-z]+\s?)*[A-Za-z]$/

* __JS, html元素加载顺序__

* __JS, 引号多重嵌套__  
html+='<div onclick="alert(\''+tagname+'\')">'+tagname+'</div>';
在HTML标准里,属性值是要放在双引号中的,而不是单引号。但对于JS来说,字符串可以使用单引号,也可以使用双引号。
双引号里如果还有需要双引号的地方引号要转译或用单引号。就是 双引号内部能在含有双引号，单引号内不能在出现单引号。

* __ArrayObj.filter()__  
参数顺序 .filter(elem, index. array){...}

* __CSS: 如何让文本对齐