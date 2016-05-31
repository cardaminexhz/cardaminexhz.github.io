title: DOM

date: 2016-5-30 11:38

tags: dailytask,

---

* __��ȡhtml�б���������__


    <ul id="source">
      <li>��������������<b>90</b></li>
      <li>�Ϻ�����������<b>70</b></li>
      <li>������������<b>80</b></li>
      <li>���ݿ���������<b>50</b></li>
      <li>���ڿ���������<b>40</b></li>
      <li>���ݿ���������<b>32</b></li>
      <li>�ɶ�����������<b>90</b></li>
      <li>��³ľ�����������<b>60</b></li>
    </ul>


* __childElementCount, children__
node.childElementCount = element.children.length.


    var ul = document.getElementById("source");
    var data = [];
    for (var i = 0; i < ul.childElementCount; i++) {
        var li = ul.children[i];
        var strCity = li.innerHTML.split("����������")[0];
        var num = Number(li.children[0].innerHTML);
        data.push([strCity, num]);
    }


* __firstElementChild, nextElmentChild__
ʹ�ü򵥵�str.substring��str.indexOf���ַ�����������ȡ�ʹ����ַ�����


    var source = document.getElementById("source");
    for(var li = source.firstElementChild; li != null; li = li.nextElementSibling){   //����ul�е�ÿ��li��Ԫ��
      var str = li.innerHTML;
      data.push([
            str.substring(0,str.indexOf("��������")),                             //get the city name
            parseInt(str.substring(str.indexOf("<b>")+3, str.indexOf("</b>")))    //get the city dqi score
        ]);
    }

* __ʹ��������ʽRegExp��صķ���������ȡ�ʹ����ַ�����__


    var source = document.getElementById("source");
    for(var li = source.firstElementChild; li != null; li = li.nextElementSibling){   //����ul�е�ÿ��li��Ԫ��
      var ret = /(\S+)����������<b>(\d+)/.exec(li.innerHTML);              //using RegExp with the capturing groups to extract the substring we need
      console.log(ret);
      data.push(new Array(
        ret[1],                             //get the city name
        parseInt(ret[2])                    //get the city dqi score
        ));
    }

* __childElementCount V.S children V.S. childNode__

��ʼ: childElementCount = children.length = 0 = childNodes.length


    <ol id="source"></ol>

�������з�: childElementCount = children.length = 0; childNodes.length = 1


    <ol id="source">
    </ol>

������Ԫ��: childElementCount = children.length = 2; childNodes.length = 5


    <ol id="source">
        <li>��������������<b>90</b></li>
        <li>�Ϻ�����������<b>70</b></li>
    </ol>