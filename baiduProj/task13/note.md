title: innerText V.S. innerHTML V.S. outerHTML

date: 2016-5-22 10:40

tags: 

---

* __innerText V.S. innerHTML V.S. outerHTML__


    <div id="test">
        <span style="color:red">test1</span> test2
    </div>
    
* __innerText__  
标签内的文本，去除嵌套的标签。  


    test1 test2

* __innerHTML__   
起点到终点的内容，包含嵌套的标签。  


    <span style="color:red">test1</span> test2
* __outerHTML__    
innerHTML + 对象标签本身。  


    <div id="test">
            <span style="color:red">test1</span> test2
    </div>
    
* __完整样例__   


    <div id="test">
       <span style="color:red">test1</span> test2
    </div>
    
    <a href="JavaScript:alert(test.innerHTML)">innerHTML内容</a>
    <a href="javascript:alert(test.innerText)">inerHTML内容</a>
    <a href="javascript:alert(test.outerHTML)">outerHTML内容</a>

* 说明  
  innerHTML是符合W3C标准的属性，而innerText只适用于IE浏览器，因此，尽可能地去使用innerHTML，而少用innerText。  
  如何完成 innerText 的功能？  
  先用 innerHTML 获取包含标签的内容，再用正则去除标签。


    document.getElementById('test').innerHTML.replace(/<.+?>/gim,'')
    
* 参考  
  [原文链接](http://blog.csdn.net/yttcjj/article/details/7288414)