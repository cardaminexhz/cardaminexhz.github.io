/**
 * Created by cardaminexhz on 2016/8/18.
 */
var G_PORT = "http://10.108.114.133:3000/posts",
    $ = function(id) { return document.getElementById(id); };


// TODO: 模拟 ajax
var xhrFactory = function() {
    this.init.apply(this, arguments);
};

xhrFactory.prototype = {
    init: function () {
        this.xhr = this.create();
    },
    create: function () {
        var xhr = new XMLHttpRequest();
        return xhr;
    },
    statechange: function (timeout, callback) {

        this.xhr.onreadystatechange = function () {

            console.log("readyState:");
            console.log(this.readyState);

            //&& this.status === 200

            /* TODO: 如何上传文件 + 更新 */
            if(this.readyState === 4 ){
                render("response", this.response);
                callback(this.response, this.status);

            }
        };

        this.xhr.ontimeout = function() {
            render("response", "请求超时");
            console.log("请求超时.");
        };

        this.xhr.timeout = timeout;
    },
    para: function (data) {
        var dataStr = "",
            lastPos;

        if(data && Object.prototype.toString.call(data) == "[object Object]") {
            for (var i in data) {
                dataStr += i + "=" + data[i] + "&";
            }
        }

        lastPos = dataStr.lastIndexOf("&");
        dataStr = dataStr.slice(0, lastPos);

        return dataStr;
    },
    get: function (url, data, callback, async, timeout) {
        this.statechange(timeout, callback);
        var newUrl = url + "?" + this.para(data);
        render("request", "GET " + newUrl);
        this.xhr.open("GET", newUrl, async ? true : false);
        this.xhr.send(null);
    },
    post: function (url, data, callback, async, timeout) {
        this.statechange(timeout, callback);
        this.xhr.open("POST", url, async ? true : false);
        render("request", "POST " + url + "; data: " + JSON.stringify(data));

        this.xhr.setRequestHeader("content-type", "application/json");

        this.xhr.send(data ? JSON.stringify(data) : null);
    },
    put: function (url, data, callback, async, timeout) {
        this.statechange(timeout, callback);
        var newUrl = url + "/" + data.id;
        this.xhr.open("PUT", newUrl , async ? true : false);
        delete data.id;
        render("request", "PUT " + url + "; data: " + JSON.stringify(data));

        this.xhr.setRequestHeader("content-type", "application/json");

        this.xhr.send(data ? JSON.stringify(data) : null);
    },
    patch: function (url, data, callback, async, timeout) {
        this.statechange(timeout, callback);
        var newUrl = url + "/" + data.id;
        this.xhr.open("PATCH", newUrl , async ? true : false);
        delete data.id;
        render("request", "PATCH " + url + "; data: " + JSON.stringify(data));

        this.xhr.setRequestHeader("content-type", "application/json");

        this.xhr.send(data ? JSON.stringify(data) : null);
    }
};

function render(id, content) {
    $(id).innerHTML = content;
}

// 表单序列化：存储到 object
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

// 发送请求
function submitHandler() {
    var method, timeLimit, requestObj,
        xhr = new xhrFactory();

    // 获取请求参数
    method = $("method").options[$("method").selectedIndex].value.toLowerCase();
    console.log(method)
    timeLimit = $("timelimit-input").value;
    requestObj = serialize2Obj($("request-form"));

    // 发送请求
    xhr[method](G_PORT, requestObj, function (data, status){    // 方括号语法
        console.log("HTTP responsse: " + status);
        console.log(data);
    }, true, timeLimit);
}

// 重置表单
function resetHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        form = target.parentNode;

    for (var i = 0; i < form.elements.length; i++) {
        field = form.elements[i];

        switch (field.type) {
            case "text":
                field.value = "";
                break;
        }
    }
}

window.onload = function () {
    $("submit").addEventListener("click", submitHandler, false);
    $("reset").addEventListener("click", resetHandler, false);
};
