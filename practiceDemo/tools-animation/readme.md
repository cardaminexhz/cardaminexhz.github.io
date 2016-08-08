# animation

1. transition V.S. animation
    + `transition`: 一组css属性 -> 另一组css属性；只能运行一次的动画。
    + `animation`:  一组css属性 -> 另一组css属性 -> 再一组css属性 -> 更多...；可运行多次。
2. 如何创建 动画
    + 定义动画：创建关键帧( `keyframe` )，浏览器会绘制出每两个 `keyframe` 之间的变化过程；
    + 将动画应用到元素上：animation 属性。动画可一次定义，多次使用。
3. 几个应用例子
    + 背景：黄色 -> 蓝色（持续一会） -> 红色
    
            .className{
                animation: glow 10s forwards;  /* forwards 当动画完成后，保持最后一个属性值 */
            }
            
            @keyframes glow {
                from { background-color: yellow; }
                25%, 75% { background-color: blue; }   /* 从25%-75% 背景色都保持为蓝色 */
                to { background-color: red; }
            }
    + 供应商前缀 - `@keyframes`
        
            @keyframes glow {}
            @-webkit-keyframes glow {}
            @-moz-keyframes glow {}
            @-o-keyframes glow {}
    + 供应商前缀 - `animation`
    
            animation: glow 10s,      /* 给一个元素应用多个动画 */
                       fadeIn 2s;
            -webkit-animation: ...;
            -moz-animation: ...;
            -o-animation: ...;
4. 几个属性
    + animation-iteration-count 属性定义动画的播放次数。`n` | `infinite`
    + animation-direction 属性定义是否应该轮流反向播放动画。`normal` | `alternate`      
      如果 animation-direction 值是 `alternate`，则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）向后播放。   
      注释：如果把动画设置为只播放一次，则该属性没有效果。
    + animation-play-state 属性规定动画正在运行还是暂停。`paused` | `running`   
        - 使用 CSS 时，只有一种方法能应用：`伪类`。
        - 通过 JS 操作这个属性，可以创建更复杂的动画，还可以添加‘暂停’按钮。
    + animation-fill-mode 属性规定动画在播放之前或之后，其动画效果是否可见。`none` | `forwards` | `backwards` | `both`  
      `forwards` 将该元素的样式保持为动画结束时的样子。