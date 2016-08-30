/**
 * Created by carda on 2016/8/29.
 * @coment: 增强：
 *      1. 触发响应函数时的上下文
 *      2. 触发响应函数时的参数列表：fire的参数列表都传到响应函数中
 */

function EventTarget() {
    this._listeners = {};
}

EventTarget.prototype = {

    constructor: EventTarget,

    addListener: function(type, handler) {
        if(typeof this._listeners[type] == 'undefined') {
            this._listeners[type] = [];
        }
        this._listeners[type].push(handler);
    },

    fire: function (event) {
        var argus = Array.prototype.slice.call(arguments, 0),
            handlers;

        if(typeof event == "string") {
            event = { type: event};
        }
        if(!event.target) {
            event.target = this;
        }
        if(typeof this._listeners[event.type] == 'undefined') {
            console.log("[error] " + "type listener undefined;");
            return;
        }

        handlers = this._listeners[event.type];
        for(var i = 0; i < handlers.length; i++) {
            handlers[i].call(this, argus.slice(1));
        }

    },

    removeListener: function(type, handler) {
        var handlers = this._listeners[type];

        if(typeof  handlers == 'undefined') {
            console.log("[error] " + "type listener undefined;")
        }
        for(var i = 0; i < handlers.length; i++) {
            if(handlers[i] === handler) {
                handlers.splice(i, 1);
                break;
            }
        }

    }
};



/* ---------------- basic use ------------------------ */
var target = new EventTarget();
function handleEvent(str){
    console.log("basic use: " + str);
}

target.addListener("foo", handleEvent);
target.fire({ type: "foo" }, "hello", "world", "basic use");    //can also do target.fire("foo")
target.removeListener("foo", handleEvent);



/* ---------------- 创建一个EventTarget的子类，然后创建子类的实例 ------------------------ */
function MyObject(){
    EventTarget.call(this);
}

MyObject.prototype = new EventTarget();
MyObject.prototype.constructor = MyObject;
MyObject.prototype.foo = function(){
    var argus = Array.prototype.slice.call(arguments, 0);
    this.fire.call(this, "foo", argus);
};


var o = new MyObject();

o.addListener("foo", function(str){
    console.log("extended use: " + str);
});

o.foo("hello", "world", "extended use");