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
    + get   
        将查询的参数用 & 拼接成查询字符串  
        
            if(data && Object.prototype.toString.call(data) == "[object Object]") {
                for (var i in data) {
                    dataStr += i + "=" + data[i] + "&";
                }
            }
    
            lastPos = dataStr.lastIndexOf("&");
            dataStr = dataStr.slice(0, lastPos);
    + 在 post,put,patch 请求中，content-type的值必须为 `application/json`    
        相应的，需要将提交的数据，由 JS对象 -> JSON `JSON.stringify()`  
        
            xhr.setRequestHeader("content-type", "application/json");
            xhr.send(data ? JSON.stringify(data) : null);
