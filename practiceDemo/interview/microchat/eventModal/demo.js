/**
 * Created by carda on 2016/8/30.
 * @comment 4.手写一个事件模型。题目给出 test 以下部分
 */

function EventEmitter() {
    this._listeners = {};
}

EventEmitter.prototype = {

    on: function(type, handler) {
        if(!(type in this._listeners)){
            this._listeners[type] = [];
        }
        this._listeners[type].push(handler);
    },

    emit: function(event) {
        var argus = Array.prototype.slice.call(arguments, 0);

        if(typeof event == "string") {
            event = { type : event };
        }
        if(!event.type in this._listeners) {
            console.log("[ERROR]" + event.type + "not bind;");
            return;
        }
        if(!event.target) {
            event.target = this;
        }

        var handlers = this._listeners[event.type];
        for(var i = 0; i < handlers.length; i++) {
            handlers[i].call(this, argus.slice(1));
        }

    },

    removeListener: function() {

    }

};


// test
var em = new EventEmitter();

em.on("hello", function (name) {
    console.log("Hello, " + name);
});

em.emit("hello", "world!");