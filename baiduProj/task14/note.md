title: array

date: 2016-5-22 10:40

tags: dailytask, array

---

* __array.filter__

_before_  


    var sidekicks = [
        { name: "Robin",     hero: "Batman"   },
        { name: "Supergirl", hero: "Superman" },
        { name: "Oracle",    hero: "Batman"   },
        { name: "Krypto",    hero: "Superman" }
    ];
    
    var batKicks = [];
    
    for (var i = 0; i < sidekicks.length ; i++) {
        if (sidekicks[i].hero === "Batman") {
            batKicks.push(sidekicks[i]);
        }
    }
    
    // Outputs: [
    //    { name: "Robin",  hero: "Batman"   },
    //    { name: "Oracle", hero: "Batman"   }
    // ]
    console.log(batKicks);

_after_  


    var sidekicks = [
        { name: "Robin",     hero: "Batman"   },
        { name: "Supergirl", hero: "Superman" },
        { name: "Oracle",    hero: "Batman"   },
        { name: "Krypto",    hero: "Superman" }
    ];
    
    var batKicks = sidekicks.filter(function (el) {
        return (el.hero === "Batman");
    });
    
    // Outputs: [
    //    { name: "Robin",  hero: "Batman"   },
    //    { name: "Oracle", hero: "Batman"   }
    // ]
    console.log(batKicks);

������  

* ����һ���µ�array����������˺���������true�������ı�ԭ��array.
* ������������Щ�������Ϳ���������elem��Ĺ�ϵ���ߺ�����array�Ĺ�ϵ�������������ӵ�filter
    + elem(the value of the element), 
    + index(the index of the element), 
    + array(the Array object)
* ����ֵ������һ��array�����Կ��Ժ�����array��������������    


    var sortedBatKickNames = sidekicks.filter(function (el) {
        return (el.hero === "Batman");
    }).map(function(el) {
        return el.name;
    }).sort();
    
    // Outputs: ["Oracle", "Robin"];
    console.log(sortedBatKickNames);

* __�ο�__  
http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

---

* __array.forEach__  
* Ϊarray�е�ÿ��elemִ��һ�η���������û��ֵ��index
* ������
    + elem(the value of the element), 
    + index(the index of the element), 
    + array(the Array object)  
    

    function logArrayElements(element, index, array) {
      console.log('a[' + index + '] = ' + element);
    }
    
    // Notice that index 2 is skipped since there is no item at
    // that position in the array.
    [2, 5, , 9].forEach(logArrayElements);
    // logs:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9

