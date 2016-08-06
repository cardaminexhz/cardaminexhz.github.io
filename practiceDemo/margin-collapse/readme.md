# 边界塌陷/ 边界重叠 (margin-collapse)

* margin-collapse
    	当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。


* solution: 包裹父元素，使父元素成为 BFC（`overflow: hidden;`）

***

* 浮动塌陷 见 `clear-float`
    + 父元素包含一系列浮动元素，而父元素不设置height，会造成浮动塌陷。
    + 解决：清除浮动
        1. clear: both;
        2. 使父元素成为BFC来包含浮动）