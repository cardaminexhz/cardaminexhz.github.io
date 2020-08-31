***

* 单例模式
    + 懒汉
        - 在真正需要使用该对象时才创建
        - 双重验证+加锁`synchronized`。volatile，禁止指令重排。
        
                public class Singleton {
                    private static volatile Singleton instance = null;
                
                    private Singleton() {};
                
                    public static Singleton getInstance() {
                        if (null == instance) {     //  双重验证: 提高效率，若已经创建实例对象，就不需要去获取锁再释放了
                            synchronized (Singleton.class) {
                                if (null == instance) {
                                    instance = new Singleton();
                                }
                            }
                        }
                        return instance;
                    }
                }
            
    + 饿汉
        - 在类加载时已经创建好，等待被使用
        - 获取对象时直接返回，不存在并发安全和性能问题
                
                public class Singleton2 {
                    private static Singleton2 instance = new Singleton2();
                
                    private Singleton2() {};
                
                    public static Singleton2 getInstance() {
                        return instance;
                    }
                }
                
    + 静态嵌套类 `static nested class`
        - 静态嵌套类实现单例模式
        - INSTANCE对象初始化的时机并不是在单例类Singleton被加载的时候，而是在调用getInstance方法，使得静态内部类LazyHolder被加载的时候。
            因此这种实现方式是利用classloader的加载机制来实现懒加载，并保证构建单例的线程安全。
        
                public class Singleton3 {
                    private static class LazyHolder {
                        private static final Singleton3 INSTANCE = new Singleton3();
                    }
                
                    private Singleton3() {};
                
                    public static Singleton3 getInstance() {
                        return LazyHolder.INSTANCE;
                    }
                }
        
        - 静态嵌套类 V.S. 内部类
            * 静态嵌套类：嵌套就是我跟你没关系，自己可以完全独立存在，但是我就想借你的壳用一下，来隐藏一下我自己。
                不依赖外部类，只能访问外部类的静态属性和方法。
            * 内部类：内部就是我是你的一部分，我了解你，我知道你的全部，没有你就没有我。（所以内部类对象是以外部类对象存在为前提的）
        > Nested classes are divided into two categories: static and non-static. Nested classes that are declared static are called static nested classes. Non-static nested classes are called inner classes.
            
            class OuterClass {
                ...
                static class StaticNestedClass {
                    ...
                }
                class InnerClass {
                    ...
                }
            }
            OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass();
            OuterClass.InnerClass innerObject = outerObject.new InnerClass();
            
        - 为什么会有内部类（使用场景），又怎么划分静态和非静态。
            * 在类A内部要操作一些属性， 可以考虑封装一个类B。并且B又只被A使用，可以考虑定义为A的内部类，防止独立定义类B时与其他类产生依赖关系。
            * B与A关联不紧密，只访问A的静态属性和方法，将B定义为静态内部类。
            * 如果不符合上述条件，B需要访问A的一切，则定义为非静态的内部类。
   + 枚举
   
            public enum SingletonEnum {
                INSTANCE;
            }