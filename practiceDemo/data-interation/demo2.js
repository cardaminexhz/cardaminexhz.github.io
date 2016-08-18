/**
 * Created by AWK on 2016/8/18.
 */

var xhrFactory = function() {
    this.init().apply(this, arguments);
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
            if(this.readyState === 4 && this.status === 200){
                callback();
            } else {
                setTimeout(function () {
                    this.xhr.abort();
                }, timeout ? timeout : 15000)
            }
        }
    },
    para: function (data) {
        var dataStr = "";
        if(data && Object.prototype.toString.call(data) == "[object Object]") {
            for (var i in data) {
                dataStr += i + "=" + data[i] + "&";
            }
        }
        return dataStr;
    },
    get: function (url, data, callback, async, timeout) {
        this.statechange(timeout, callback);
        var newUrl = url + "?" + this.para(data);
        this.xhr.open("GET", url, async ? true : false);
        this.xhr.send(null);
    },
    post: function (url, data, callback, async, timeout) {
        this.statechange(timeout, callback);
        this.xhr.open("POST", url, async ? true : false);
        this.xhr.setRequestHeader("content-type", "x-www-form-urlencoded");
        var dataStr = this.para(data);
        this.xhr.send(dataStr ? dataStr : null);
    }
};


var xhr = new xhrFactory();
xhr.post("test.html", null, function (data){
    alert(data);
});