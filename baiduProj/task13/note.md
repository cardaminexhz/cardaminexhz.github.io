title: innerText V.S. innerHTML V.S. outerHTML

date: 2016-5-22 10:40

tags: 

---

* __innerText V.S. innerHTML V.S. outerHTML__


    <div id="test">
        <span style="color:red">test1</span> test2
    </div>
    
* __innerText__  
��ǩ�ڵ��ı���ȥ��Ƕ�׵ı�ǩ��  


    test1 test2

* __innerHTML__   
��㵽�յ�����ݣ�����Ƕ�׵ı�ǩ��  


    <span style="color:red">test1</span> test2
* __outerHTML__    
innerHTML + �����ǩ����  


    <div id="test">
            <span style="color:red">test1</span> test2
    </div>
    
* __��������__   


    <div id="test">
       <span style="color:red">test1</span> test2
    </div>
    
    <a href="JavaScript:alert(test.innerHTML)">innerHTML����</a>
    <a href="javascript:alert(test.innerText)">inerHTML����</a>
    <a href="javascript:alert(test.outerHTML)">outerHTML����</a>

* ˵��  
  innerHTML�Ƿ���W3C��׼�����ԣ���innerTextֻ������IE���������ˣ������ܵ�ȥʹ��innerHTML��������innerText��  
  ������ innerText �Ĺ��ܣ�  
  ���� innerHTML ��ȡ������ǩ�����ݣ���������ȥ����ǩ��


    document.getElementById('test').innerHTML.replace(/<.+?>/gim,'')
    
* �ο�  
  [ԭ������](http://blog.csdn.net/yttcjj/article/details/7288414)