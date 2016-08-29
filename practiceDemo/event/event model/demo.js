/**
 * Created by carda on 2016/8/29.
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

        var handlers = this._listeners[event.type];
        for(var i = 0; i < handlers.length; i++) {
            handlers[i].call(this, event);
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


function MyObject(){
    EventTarget.call(this);
}

MyObject.prototype = new EventTarget();
MyObject.prototype.constructor = MyObject;
MyObject.prototype.foo = function(){
    this.fire("foo");
};


var o = new MyObject();

o.addListener("foo", function(){
    console.log("Foo just happened.");
});

o.foo();