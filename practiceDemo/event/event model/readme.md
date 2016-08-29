# 松耦合，观察者模式，events

* Observer pattern 观察者模式
    <img src="observe pattern.png" width="720px" height="300px">


***

* events

ref: [Custom events in JavaScript](https://www.nczonline.net/blog/2010/03/09/custom-events-in-javascript/)

> Put quite simply: the way that you tie behavior to web pages is through events. 
Events are a way of letting interested parties know that an important moment has occurred 
in the lifecycle of the application. 

> The Browser Object Model (BOM) and Document Object Model (DOM) publish events to allow developers 
access to the interesting moments of the browser and web page, respectively.

* Custom events
    + 最小功能集
        1. `Assign` an event handler for a particular event.
        2. `Remove` an event handler for a particular event.
        3. `Fire` an event and call all assigned event handlers.
    + 思路
        - 创建一个类：实现最小功能集；然后创建一个类的实例，或者子类继承该类，创建子类的实例。
        
                function EventTarget () {
                }
                EventTarget.prototype = {
                    assign: function() {},
                    remove: function() {},
                    fire: function() {}
                }
        - `Assign` `Remove` `Fire` 函数的外层作用域创建一个对象，存储注册的事件及响应函数列表。
        
                this._listeners = {
                    type1 : [handler11, handler12, handler13],
                    type2 : [handler11, handler12, handler13],
                    ...
                }
        - `Assign`(或者说`bind`)时，若该类型尚无响应函数，则创建一个数组；若已存在，直接将新的响应函数push到数组。
        
                if(typeof this._listeners[type] == 'undefined') {
                    this._listeners[type] = [];
                }
                this._listeners[type].push(handler);
        - `Fire`(或者说`trigger`)时，依次调用该类型的响应函数即可。
        
                var handlers = this._listeners[event.type];
                for(var i = 0; i < handlers.length; i++) {
                    handlers[i].call(this, event);
                }
    + [源码](https://github.com/cardaminexhz/cardaminexhz.github.io/tree/master/practiceDemo/event/event model/demo.js)
    + 增强：
        - 事件冒泡
        - 出错后继续执行handler
        - 允许handler阻止进一步操作或和默认行为

