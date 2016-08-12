# transform

* transform 
    + 对网页元素进行变换
    + 对周围的元素不会产生影响 - 不会重新布局，不会移开其他元素（e.g. 某元素尺寸放大时，会与周围元素重叠）

* `rotate` 旋转  

        transform: rotate(45deg);   /* 顺时针旋转45° */
        transform: rotate(-45deg);  /* 逆时针旋转45° */
* `scale` 缩放  

        transform: scale(2);
    + `scale(缩放倍率)` 
    + 缩放倍率 * 当前尺寸
    + 缩放倍率：0-1，缩小；>1，放大
    + `scaleX()` `scaleY()`
    + 要始终把访问者放在心上：无论怎么操作CSS，都要确保网页清晰可读。
    + 场景：鼠标移过按钮，按钮变大。`scale` + `transition`
    
            .enlarge {
                transition: transform 1s;
            }
            .enlarge:hover {
                transform: scale(1.2);
            }
* `translate` 将一个元素从它现有的位置向 上/下/左/右 移动一定的距离

        transform: translate(x, y);
    + x, 正值-向右；y，正值-向下
    + 支持任何有效的长度单位：`px` `em` `%`
    + `translateX()` `translateY()`
    + 在原始位置留下一个空白空格，在新的位置绘制
    + 场景：
        - 对鼠标的悬浮、单击状态做出细微的移动
        - `translate` + `transition` 可模拟元素移动，穿过整个屏幕
* `skew` 沿X轴/Y轴倾斜

        transform: skew(xdeg, ydeg)
    + `skewX()` `skewY()`
* 多个 transform 共用，供应商前缀

        transform: rotate(45deg) scale(2);
        -webkit-transform: ...;
        -moz-transform: ...;
        -o-transform: ...;
* `transform-origin` 切换变换中心点
    + 默认情况下，浏览器以元素的中心点作为变换点
    + 支持 `关键字值`，以`px`为单位的绝对值，以`em` `%`为单位的相对值
    + 场景
    
            /* 围绕左上角点旋转 */
            transform-origin: top left;  /* 关键字值 */
            transform-origin: 0 0;       /* pixel */
            transform-origin: 0% 0%;     /* percentage */
    + 对只有用 translate 才会移动的元素，`transform-origin`对其无影响。
