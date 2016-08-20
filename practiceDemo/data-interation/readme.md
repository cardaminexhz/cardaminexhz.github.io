* 定位 `position` `translate`
    + `transform: translateX(-100%)`   
        位移：根据自身的大小
        
***

* 表单序列化   

        /* 序列化为 JS对象 */
        function serialize2Obj(form) {
            var formObj = {},
                field;
        
            for (var i = 0; i < form.elements.length; i++) {
                field = form.elements[i];
        
                switch (field.type) {
                    case "text":
                        if((field.value || "").trim()) {
                            formObj[field.name] = field.value;
                        }
                        break;
                }
            }
            return formObj;
        }


***

* 使用 JSON-Server 作为测试工具
    + 服务器接口列表
    
            GET   /posts    //获取posts下的所有资源
            GET   /posts/1  //获取posts下id为1的资源
            GET   /posts?title=json-server&author=typicode //获取posts下title=json-server&author=typicode的资源
            POST  /posts   //posts添加操作
            PUT   /posts/1 //对posts下id为1的资源进行修改操作：完全替换
            PATCH /posts/1 //对posts下id为1的资源进行修改操作：局部更新
            DELETE   /posts/1  //对posts下id为1的资源进行删除操作
    + `get`   
        将查询的参数用 & 拼接成查询字符串  
        
            if(data && Object.prototype.toString.call(data) == "[object Object]") {
                for (var i in data) {
                    dataStr += i + "=" + data[i] + "&";
                }
            }
    
            lastPos = dataStr.lastIndexOf("&");
            dataStr = dataStr.slice(0, lastPos);
    + 在 `post` `put` `patch` 请求中，content-type的值必须为 `application/json`    
        相应的，需要将提交的数据，由 JS对象 -> JSON `JSON.stringify()`  
        
            xhr.setRequestHeader("content-type", "application/json");
            xhr.send(data ? JSON.stringify(data) : null);

***

* RESTful 
    RESTful 只是标准，标准的意思是如果大家都依此行事的话，沟通成本会很低，开发效率就高。
    
    那么只要前后台约定好，就可以随意选取方法了么？
    
    > This is wrong because a request passes through many intermediaries and middleware applications which perform optimizations based on the HTTP method type. 
    These optimizations depend on two key characteristics of HTTP methods: idempotency and safety, which are defined in the HTTP specification.
    
    从这个角度来说，对哪种操作使用哪种方法，取决于 `HTTP 方法本身的特性` 和 `前后台交互接口的约定`。

* HTTP 方法的两个关键特性：`安全`|`幂等` （`safe`|`idempotent`）
    + `safe`   
        安全的方法被期望不会产生任何副作用（side effects）。这些操作是只读的。e.g. 查询数据库。
    + `idempotent`   
        幂等的方法保证了重复进行一个请求和一次请求的效果相同。    
        在数学中，幂等性指N次变换和一次变换的结果相同。
        
            x = 1;    /* 幂等 */
            x++;      /* 非幂等 */
            
        <img src="http method.png" width="660px" height="300px">

+ RESTful 下的 `post` `put` `patch`
    - `post`
        * 非幂等：两次相同的POST请求会在服务器端创建两份资源，它们具有不同的URI。
        * POST 所对应的URI并非创建的资源本身，而是资源的接收者。比如：POST xx/articles 的语义是在 xx/articles下创建一篇帖子。
        * 从另一个角度理解 POST [如何设计下单的接口？`post /orders` ?](https://www.web-tinker.com/article/21284.html)
        * > 本来 POST 就是被设计来提交表单这样的事务型操作的。所以 POST 可以理解为执行服务器的一个事务。POST 请求服务器执行一个动作，多次发起请求可能导致动作多次执行：非幂等。
    - `put`
        * 幂等：对同一URI进行多次PUT的副作用和一次PUT是相同的。
        * PUT 所对应的URI是要创建或更新的资源本身。比如：PUT xx/articles/4231 的语义是创建或更新ID为4231的帖子。
    - `patch`
        * 非幂等 e.g. `patch` 可以对资源进行逻辑判断增量修改，如每次加3，那么执行多次，就会造成额外影响。
        * 对已有资源的局部更新（而不用指定整个资源）。
        
    ***

    有人认为应该用 POST 来创建新资源，用 PUT 来更新已有资源。如果用 POST 来做更新操作，就不符合 RESTful 风格。
    
    实际并非如此。
    
    > The REST standard doesn’t stop us from using POST requests for updates. 
    In fact, it doesn’t even talk about it because idempotency and safety guarantees are properties of the HTTP protocol, not of the REST standard.
    
    作者 [Code Ahoy](http://codeahoy.com/2016/07/04/rest-design-choosing-the-right-http-method/) 又引用了 Roy Fielding 的话，
    大意是，例如 RESTful 不使用 GET 来进行不安全的操作，是因为这会违反 HTTP 中对 GET 方法的定义，反过来就会影响中间件和搜索引擎。由 HTTP 定义的方法是 
    Web's architecture definition 的一部分，而不属于 REST architecture style.
    
    因此，使用 POST 还是 PUT 归结于：这些方法的幂等性保证。
    
    因为 PUT 是幂等的，所以当第一个请求的响应没有及时到达的时候，clients 或者中间件可以重复发送 PUT 请求，而不用考虑 server 是否已经处理了第一个请求。
    而为了保证幂等性，PUT 请求必须替换整个资源，因此必须发送所有属性。
    如果要进行局部更新，就必须使用 POST 或者 PUT 这些非幂等的方法。
        
    ***

    > `POST` to a URL creates a child resource at a server defined URL.   
      `PUT` to a URL creates/replaces the resource in its entirety at the client defined URL.   
      `PATCH` to a URL updates part of the resource at that client defined URL.   
      
    - `post` `put`
    
        创建的对象，其URL是由 client 命名，还是 server？server 决定 - `post`；client 命名 - `put`.  
        
        如果只是知道这个资源的父级类别的 URL，用 `post`；（比如说创建的资源id是数据库中自增长的）；   
          
            POST /expense-report
            
        换句话说，如果知道将要创建的资源的 URL，用 `put`；   
       
            PUT  /expense-report/10929
            
        `put` 是创建时的一个候选方法：当 client 在资源创建前就已经知道了它的URL。  
        
    - `put` `patch`
        * `put` 用来对已知资源做完全替换，要求前端提供一个完整的资源对象，缺了的字段会被清空。
        * `patch` 做局部更新，后台只会更新接收到的字段。【节省带宽】
    - ref:
        * [PUT vs POST in REST](http://stackoverflow.com/questions/630453/put-vs-post-in-rest)



        