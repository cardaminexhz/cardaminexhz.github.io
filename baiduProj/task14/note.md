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

分析：  

* 创建一个新的array，当满足过滤函数（返回true）；不改变原有array.
* 参数：利用这些参数，就可以依赖于elem间的关系或者和整个array的关系，来创建更复杂的filter
    + elem(the value of the element), 
    + index(the index of the element), 
    + array(the Array object)
* 返回值：返回一个array，所以可以和其他array方法连接起来。    


    var sortedBatKickNames = sidekicks.filter(function (el) {
        return (el.hero === "Batman");
    }).map(function(el) {
        return el.name;
    }).sort();
    
    // Outputs: ["Oracle", "Robin"];
    console.log(sortedBatKickNames);

* __参考__  
http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

---

* __array.forEach__  
* 为array中的每个elem执行一次方法；跳过没有值的index
* 参数：
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

