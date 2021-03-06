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

* RESTful 是什么 [阮一峰：理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful)
    + Representational State Transfer 表征状态转移
    + 核心：resource。representation 指的是 resource 的表现层。  
        resource，资源，即一个实体（文本/图片/服务），可以用一个 URI 唯一标识。
    + representation，表现层  
        资源，是一个实体，可以有多种外在表现形式。这个表现形式，即 representation 表现层。  
        e.g. 文本可以用txt表示，也可以用 HTML/ XML/ JSON。
    + State Transfer，状态转移  
        client <-> server，这个交互涉及到数据和状态的变化。   
        client 操作 server，即通过某种手段（HTTP method），使 server 发生状态转移。
        
    + 目前对 REST 的理解：(2016-8-20)
        - 每个 URI 代表一种资源。用名词表示。
        - HTTP method 表示对资源进行了哪种类型的操作。
        
    + HTTP verbs 推荐返回的状态码
        <img src="CRUD method.png" width="900px" height="300px">
    + TOP10 HTTP Status Code in REST
        - `200 OK` `201 Created` `204 No Content`
        - `304 Not Modified`
        - `400 Bad Request` `401 Unauthorized` `403 Forbidden` `404 Not Found` `409 Conflict`
        - `500 Internal Server Error`
    + 水很深，现在还理解不了
        - [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html)   
            1. Level 1 - Resources
            2. Level 2 - HTTP Verbs
            3. Level 3 - Hypermedia Controls
        - [Fielding's paper](http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
        - [Learn REST: A RESTful Tutorial](http://www.restapitutorial.com/index.html)
        - [What exactly is RESTful programming?](http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming)

***

* JSON-Server
    + JSON-Server 是一款前端测试工具，可提供 REST API + JSON 服务。
    + 来看一组 JSON-Server 提供的 RESTful API 接口:
    
            GET   /posts    //获取posts下的所有资源
            GET   /posts/1  //获取posts下id为1的资源
            GET   /posts?title=json-server&author=typicode //获取posts下title=json-server&author=typicode的资源
            POST  /posts   //posts添加操作
            PUT   /posts/1 //对posts下id为1的资源进行修改操作：完全替换
            PATCH /posts/1 //对posts下id为1的资源进行修改操作：局部更新
            DELETE   /posts/1  //对posts下id为1的资源进行删除操作
    + 有这两个明显的特点：
        - 每个 URI 代表一种资源。用名词表示。
        - HTTP method 表示对资源进行了哪种类型的操作。
    + 使用时需注意：
        - `get`   
            将查询的参数用 & 拼接成查询字符串  
            
                if(data && Object.prototype.toString.call(data) == "[object Object]") {
                    for (var i in data) {
                        dataStr += i + "=" + data[i] + "&";
                    }
                }
        
                lastPos = dataStr.lastIndexOf("&");
                dataStr = dataStr.slice(0, lastPos);
        - 在 `post` `put` `patch` 请求中，content-type的值必须为 `application/json`    
            相应的，需要将提交的数据，由 JS对象 -> JSON `JSON.stringify()`  
            
                xhr.setRequestHeader("content-type", "application/json");
                xhr.send(data ? JSON.stringify(data) : null);

***

* RESTful 

    RESTful 只是一种 architectural style，意思是如果大家都依此行事的话，沟通成本会很低，开发效率就高。
    
    那么只要前后台约定好，就可以随意选取方法了么？
    
    > This is wrong because a request passes through many intermediaries and middleware applications which perform optimizations based on the HTTP method type. 
    These optimizations depend on two key characteristics of HTTP methods: idempotency and safety, which are defined in the HTTP specification.   
    [Code Ahoy: REST Design - Choosing the Right HTTP Method](http://codeahoy.com/2016/07/04/rest-design-choosing-the-right-http-method/)
    
    从这个角度来说，对哪种操作使用哪种方法，取决于 `HTTP 方法本身的特性` 和 `前后台交互接口的约定`。

* HTTP 方法的两个关键特性：`安全`|`幂等` （`safe`|`idempotent`）
    + `safe`   
        安全的方法被期望不会产生任何副作用（side effects）。这些操作是只读的。e.g. 查询数据库。
    + `idempotent`   
        幂等的方法保证了重复进行一个请求和一次请求的效果相同。（并不是指返回 client 的响应总是相同的；而是指 server 上资源的状态从第一次请求后就不再改变）    
        在数学中，幂等性指N次变换和一次变换的结果相同。
        
            x = 1;    /* 幂等 */
            x++;      /* 非幂等 */
            
        <img src="http method.png" width="660px" height="300px">

* `安全`|`幂等` 是由 HTTP 标准定义的契约：开发者在实现 RESTful API 时必须遵守。

    + 如果一个操作没有以幂等的方式实现，那么即使它是通过 GET 方法调用的，它也不会自动变成 幂等的/ 安全的。
    + 当使用 HTTP 构建 RESTful 程序时，对HTTP method 的实现应该满足其安全性和幂等性，来使 client 和中间件能自由地按契约优化，并增强用户体验。
    
        e.g. 浏览器并不确切知道某个特定的 form 用途，但如果这个 form 是通过 HTTP GET 提交的，浏览器就会知道当出现网络异常的时候，它可以安全的、自动再次尝试提交。
        而通过 HTTP POST 提交的 form，如果浏览器不先向用户确认就重复提交，会是不安全的。
        
    + [Idempotent and Safe HTTP Methods - Why Do They Matter?](http://codeahoy.com/2016/06/30/idempotent-and-safe-http-methods-why-do-they-matter/)   
      [Limitations of the GET method in HTTP](https://blogs.dropbox.com/developers/2015/03/limitations-of-the-get-method-in-http/)
        
        <img src="safe idempotent.png" width="660px" height="240px">
    

+ RESTful 下的 `post` `put` `patch`
    - `post`
        * 非幂等：两次相同的POST请求会在服务器端创建两份资源，它们具有不同的URI。
        * POST 所对应的URI并非创建的资源本身，而是资源的接收者。比如：POST xx/articles 的语义是在 xx/articles下创建一篇帖子。
        * 从另一个角度理解 POST [如何设计下单的接口？`post /orders` ?](https://www.web-tinker.com/article/21284.html)
        
            > 本来 POST 就是被设计来提交表单这样的事务型操作的。所以 POST 可以理解为执行服务器的一个事务。POST 请求服务器执行一个动作，多次发起请求可能导致动作多次执行：非幂等。
    - `put`
        * 幂等：对同一URI进行多次PUT的副作用和一次PUT是相同的。
        * PUT 所对应的URI是要创建或更新的资源本身。比如：PUT xx/articles/4231 的语义是创建或更新ID为4231的帖子。
    - `patch`
        * 非幂等 e.g. `patch` 可以对资源进行逻辑判断增量修改，如每次加3，那么执行多次，就会造成额外影响。
        * 对已有资源的局部更新（而不用指定整个资源）。
        
***

+ 有人认为应该用 POST 来创建新资源，用 PUT 来更新已有资源。如果用 POST 来做更新操作，就不符合 RESTful 风格。

+ 实际并非如此。

    > The REST standard doesn’t stop us from using POST requests for updates. 
    In fact, it doesn’t even talk about it because idempotency and safety guarantees are properties of the HTTP protocol, not of the REST standard.

    作者 [Code Ahoy](http://codeahoy.com/2016/07/04/rest-design-choosing-the-right-http-method/) 又引用了 Roy Fielding 的话，
    大意是，例如 RESTful 不使用 GET 来进行不安全的操作，是因为这会违反 HTTP 中对 GET 方法的定义，反过来就会影响中间件和搜索引擎。由 HTTP 定义的方法是 
    Web's architecture definition 的一部分，而不属于 REST architecture style.
    
+ 因此，使用 POST 还是 PUT 归结于：这些方法的幂等性保证。

+ 因为 PUT 是幂等的，所以当第一个请求的响应没有及时到达的时候，clients 或者中间件可以重复发送 PUT 请求，而不用考虑 server 是否已经处理了第一个请求。
而为了保证幂等性，PUT 请求必须替换整个资源，因此必须发送所有属性。
如果要进行局部更新，就必须使用 POST 或者 PUT 这些非幂等的方法。
    
***

* 既然选择 POST 还是 PUT 不属于 REST architecture style 的范围，而属于 HTTP 的设计，那我们来看看两者在 HTTP 中分别应用于什么场景。
* HTTP 中的 POST V.S. PUT
    > The fundamental difference between the POST and PUT requests is reflected in the different meaning of the Request-URI. 
    > The URI in a POST request identifies the resource that will handle the enclosed entity. That resource might be a data-accepting process, 
    a gateway to some other protocol, or a separate entity that accepts annotations. 
    > In contrast, the URI in a PUT request identifies the entity enclosed with the request – the user agent knows what URI is intended 
    and the server MUST NOT attempt to apply the request to some other resource.
    [Method Definitions RFC2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
    
    + POST 和 PUT 最根本的区别反映在 request URI 的含义上：
        - POST 请求中的 URI，标识了要处理所附实体的资源。
        - PUT 请求的的 URI，标识了所附实体。
    
    + PUT
    
        > PUT puts a file or resource at a specific URI, and exactly at that URI.
        
        如果这个这个 URI 所指定的位置上已有资源，PUT 就会替换掉这个资源；如果没有， PUT 会创建一个。   
        但是 PUT 请求的响应不会被缓存。
    + POST  

        > POST sends data to a specific URI and expects the resource at that URI to handle the request.
        
        POST 请求的响应的是可以缓存的，只要 server 设置了合适的 Cache-Control 和 Expires 首部。
        
        [HTTP RFC](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) 指定 POST 用来：
        
        - Annotation of existing resources;
        - Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles;
        - Providing a block of data, such as the result of submitting a form, to a data-handling process;
        - Extending a database through an append operation.
    
    + 使用 REST 的好处之一就是促进了 HTTP verbs/methods 的正确使用。
    + [What's the difference between a POST and a PUT HTTP REQUEST?](http://stackoverflow.com/questions/107390/whats-the-difference-between-a-post-and-a-put-http-request)
        
***

* 最后来归纳一下：
    > `POST` to a URL creates a child resource at a server defined URL.   
      `PUT` to a URL creates/replaces the resource in its entirety at the client defined URL.   
      `PATCH` to a URL updates part of the resource at that client defined URL.   
      
    + `post` `put`
    
        创建的对象，其URL是由 client 命名，还是 server？server 决定 - `post`；client 命名 - `put`.  
        
        如果只是知道这个资源的父级类别的 URL，用 `post`；（比如说创建的资源id是数据库中自增长的）；   
          
            POST /expense-report
            
        换句话说，如果知道将要创建的资源的 URL，用 `put`；   
       
            PUT  /expense-report/10929
            
        `put` 是创建时的一个候选方法：当 client 在资源创建前就已经知道了它的URL。  
        
    + `put` `patch`
        - `put` 用来对已知资源做完全替换，要求前端提供一个完整的资源对象，缺了的字段会被清空。
        - `patch` 做局部更新，后台只会更新接收到的字段。【节省带宽】
    + ref:
        - [PUT vs POST in REST](http://stackoverflow.com/questions/630453/put-vs-post-in-rest)
        - [REST Design - Choosing the Right HTTP Method](http://codeahoy.com/2016/07/04/rest-design-choosing-the-right-http-method/)


        