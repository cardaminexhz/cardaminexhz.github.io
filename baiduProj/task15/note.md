title: DOM

date: 2016-5-30 11:38

tags: dailytask,

---

* __读取html列表，生成数组__


    <ul id="source">
      <li>北京空气质量：<b>90</b></li>
      <li>上海空气质量：<b>70</b></li>
      <li>天津空气质量：<b>80</b></li>
      <li>广州空气质量：<b>50</b></li>
      <li>深圳空气质量：<b>40</b></li>
      <li>福州空气质量：<b>32</b></li>
      <li>成都空气质量：<b>90</b></li>
      <li>乌鲁木齐空气质量：<b>60</b></li>
    </ul>


* __childElementCount, children__
node.childElementCount = element.children.length.


    var ul = document.getElementById("source");
    var data = [];
    for (var i = 0; i < ul.childElementCount; i++) {
        var li = ul.children[i];
        var strCity = li.innerHTML.split("空气质量：")[0];
        var num = Number(li.children[0].innerHTML);
        data.push([strCity, num]);
    }


* __firstElementChild, nextElmentChild__
使用简单的str.substring、str.indexOf等字符串方法来读取和处理字符数据


    var source = document.getElementById("source");
    for(var li = source.firstElementChild; li != null; li = li.nextElementSibling){   //遍历ul中的每个li子元素
      var str = li.innerHTML;
      data.push([
            str.substring(0,str.indexOf("空气质量")),                             //get the city name
            parseInt(str.substring(str.indexOf("<b>")+3, str.indexOf("</b>")))    //get the city dqi score
        ]);
    }

* __使用正则表达式RegExp相关的方法来来读取和处理字符数据__


    var source = document.getElementById("source");
    for(var li = source.firstElementChild; li != null; li = li.nextElementSibling){   //遍历ul中的每个li子元素
      var ret = /(\S+)空气质量：<b>(\d+)/.exec(li.innerHTML);              //using RegExp with the capturing groups to extract the substring we need
      console.log(ret);
      data.push(new Array(
        ret[1],                             //get the city name
        parseInt(ret[2])                    //get the city dqi score
        ));
    }

* __childElementCount__

* __children__

* __childNode__