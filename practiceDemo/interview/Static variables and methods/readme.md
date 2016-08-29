# static variables and methods

ref: [一道常被人轻视的前端JS面试题](http://www.cnblogs.com/xxcanghai/p/5189353.html#3493457)

    function Foo() {
        getName = function () { console.log(1); };
        return this;
    }
    Foo.getName = function () { console.log(2);};
    Foo.prototype.getName = function () { console.log(3);};
    var getName = function () { console.log(4);};
    function getName() { console.log(5);}

    //请写出以下输出结果：
    Foo.getName();
    getName();
    Foo().getName();
    getName();
    new Foo.getName();
    new Foo().getName();
    new new Foo().getName();

* 几个点：
    + js 静态属性/ 方法
    + 声明提升（变量声明/ 函数声明）；函数表达式
    + 作用域链；修改下 Foo
    
            function Foo() {
                console.log(getName);
                var getName = function () { console.log(1); };
                console.log(getName);
                console.log(this);
                return this;
            } 
    + this 的指向：由所在函数的调用方式决定的
    + JS 带有返回值的构造函数的处理
    + JS 运算符的优先级 【TODO】

***

* static variables and methods
    + 场景：
        1. 需要一个变量来计数函数被调用的次数
        2. 强类型语言(e.g. Java)中的`静态变量`：和类型关联，而不是和实例相关（a variable or method associated to a "type" but not to an instance）
    + JS 实现：
    
            function f() {
                f.count = ++f.count || 1;
                console.log(f.count);
            }
            f(); f(); f(); // 1, 2, 3
        1. 也可以用全局变量来保存计数器；但使用静态变量，能保持一个更好的结构
        2. JS 将函数作为 ‘第一类型对象’ `first-class objects`，所以可以给函数附加属性/ 方法，即静态属性/ 方法。
        
                function f() {
                    f.count = ++f.count || 1;
                }
                f.showCount = function() {
                    console.log(f.count);
                }
                
                var objF1 = new f();
                var objF2 = new f();
                f.showCount(); // 2
    + 一个例子：
    
            function MyClass () { // constructor function
            
              var privateVariable = "foo";  // Private variable 
            
              this.publicVariable = "bar";  // Public variable 
            
              this.privilegedMethod = function () {  // Public Method - closure
                console.log(privateVariable);  
              };
            }
            
            // Instance method will be available to all instances but only load once in memory 
            MyClass.prototype.publicMethod = function () {    
                console.log(this.publicVariable);
            };
            
            // Static variable shared by all instances
            MyClass.staticProperty = "baz";
            
            // Static method shared by all instances
            MyClass.staticMethod = function() {
                console.log(MyClass.staticProperty);
            };
    
            var myInstance = new MyClass();
            console.log(MyClass.prototype);
            myInstance.privilegedMethod();  // foo
            myInstance.publicMethod();   // bar
            console.log(myInstance.publicVariable); // bar
            MyClass.staticMethod();     // baz
    + ref:
        - [Static variables in JavaScript](http://stackoverflow.com/questions/1535631/static-variables-in-javascript)
        - [Static variables and methods](http://javascript.info/tutorial/static-variables-methods-decorators)
        
***

