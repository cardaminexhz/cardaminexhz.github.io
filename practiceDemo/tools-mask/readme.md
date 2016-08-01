# ����Ч��

* �ó��� border ʵ���ⲿ��� `mask.html`

    1. ���Զ�λ������border-radius��ʵ��Բ�� `border-redius: 50%;`
    2. �ó����border��ʵ���ⲿ����䣬
        
            border: 20000px solid black;
            margin-left: -20000px;
            margin-top: -20000px;
            
    3. ����border��͸���ȴﵽ��Ҫ��͸���ȣ�
    
            opacity:0.9;              /* ͸���� */
            filter:Alpha(opacity=90); /* IE8 �Լ����������� */
            -moz-opacity:0.9;
    
    4. ������λԪ�� `overflow: hidden;`


***

* CSS3 mask `mask-css3.html`

CSS3 �ṩ�� mask-img ��ʵ�����֡�mask ��ԭ����ʹ��һ��������ͼƬ������ͼƬ�еĺ�ɫ������ʾ����ɫ�������ء�

    background: url(img/background.jpg) repeat;
    -webkit-mask: url(img/mask.png);

>��ͼ������rgb����ͨ���Լ���ÿ�������϶������ɫ��ɵġ�����������֮�ϻ��е��ĸ�ͨ����alphaͨ����ͨ�����ȶ���ÿ�������ϵ�͸���ȡ�
��ɫ��ζ�Ų�͸������ɫ��ζ��͸�������ںڰ�֮��Ļ�ɫ��ʾ��͸����  
`The first three values are RGB color values and the last value is the level of the transparency (0 = transparent and 1 = opaque).`

 <img src="img/eg.png" width = "630" height = "380" alt="eg.png" align=center />
 <img src="img/rgba.png" width = "690" height = "380" alt="rgba.png" align=center />
 
  ref:  
  [�����CSS��ʹ������](http://www.w3cplus.com/css3/css-masking.html/)  
  [The Basics of CSS3](http://webdesignerwall.com/tutorials/the-basics-of-css3/)
       
***

* ��Ӷ���Ч�� `mask-transition.html`

    1. clip: `clip: rect(100px,200px,300px,50px);` 
       ����һ�����þ��Σ��������þ��Զ�λԪ�أ�
       ����涨һ��Ԫ�صĿɼ��ߴ磬������Ԫ�ؾͻᱻ�޼�����ʾΪ�����״��
       �������������������ݻ���� overflow ��ֵ������
       ����������ܱ�Ԫ�ص���������Ҳ���ܱ�������С��
        
�� `mask-transition.html` �У�ʵ������Ч����˼·��

1. �ó��� border ʵ���ⲿ���
2. `:hover` ʱ������͸��Բ�ε� `width` �� `height`
3. ͨ�� `transition` ����һ�����ɶ���Ч��
4. demo ���Կ����� [say Hi](http://cardaminexhz.github.io/practiceDemo/tools-mask/mask-transition.html) ����ͨ�� `:hover::after` ��ӡ�

***

* transition

1. transition ��ʲô - ��һ��ʱ���ڣ���һ��css���� `�任` ����һ�����Ե� `����չʾ����`��
2. ���ʹ transition ��Ч
    + ������ʽ����������ա�Ȼ������������Զ�����ʽչʾ������ʽ֮��ı仯���̡�
    + transition ���ԣ�һ�㶨���������ʽ�С�
    + ����������ʹ��ʽ�����仯����� -> ���գ���ִ�ж�����
        - α�ഥ����e.g. `:hover`�����������Ԫ����ʱ����`:active`����굥��Ԫ��ʱ����`:target`��Ԫ�س�Ϊ����Ŀ��ʱ����
        - ͨ��JS��̬�ı��ǩ��ʽ��1.�ı� `className`��2.�޸� `.style.xxxproperty`
        
            Ӧ�ó�������Ҫ�ڵ��Ԫ��ʱ���� transition�����������ͣ��һ��Ԫ����ʱ������һ��Ԫ���ϴ��� transition��etc.
        - ��֮��ֻҪ�� css���Է����仯��css transition ������Ч��
        
        �����ٴ���ִ�ж���ʱ��������뿪����������Ὣ�ñ�ǩ���ص�����ǰһ����ʽ�����Զ�����ʾ�������̡�
        ��ʽ�仯����� < - > ���գ���ֻ������һ�� transition��
        ���ʡ�ͨ��JS��̬�ı��ǩ��ʽʱ����δ�Զ��ص����״̬��       
3. �����Զ�����ʽģ����Щcss����
    + `height` `width` `margin` `padding`
    + `top` `left` `bottom` `right` ����λ���ԣ�
    + `color` `background-color` `opacity`
    + `border-color` `border-width`
    + `font-size` `line-height` `letter-spacing` `word-spacing`      
4. ������ transition
    + transition-property	�Թ���Ч��չʾ��Щ����
      ���ʹ��all�ؼ��ֻ���ʡ����transition-property����ô���з����仯�����Զ���Ӧ��transition�����ʹ��none�ؼ��֣��򲻻���transitionЧ��
    + transition-duration	��ɹ���Ч����Ҫ���������롣
    + transition-timing-function	�涨�ٶ�Ч�����ٶ����ߡ�
    + transition-delay	����Ч����ʼ֮ǰҪ��Ҫ��ʱ        
5. ��ݷ�ʽ

        transition: all 1s ease-in 5s;
        -webkit-transition: color 1s,      <!-- ȷ����Firefox��Opera�ľɰ汾����Ч��ʹ�ù�Ӧ��ǰ׺ -->
                    background-color 1s,   <!-- ÿ��transition������һ�У�����߿ɶ��� -->
                    border-color .5s 1s;   <!-- border-colore �仯ǰ��1s��ʱ��������������չʾ�궯�������������� -->
        -moz-transition: color 1s,
                    background-color 1s,
                    border-color .5s 1s;
        -o-transition: color 1s,
                    background-color 1s,
                    border-color .5s 1s;

***

ref:  
[Web������Ч��ʵ��̽��](https://jdc.jd.com/archives/1535)   
[CSS3 Image Styles](http://webdesignerwall.com/demo/css3-image-styles/)

***

* ��ϰ��-A�鸲��B�� `A-B-transmition.html`

> ����Ч�� - ��a���ǿ�b
    ��a����b�ȿ�ߣ����� width: 200px; height: 300px;����
    ���������b��ʱ��a�����������ƣ�ֱ����ȫ������b���档
    a��ֻ�к�b�ص��Ĳ��ֲŻ���ʾ��ҳ���ϣ�ԭ��a��ҳ���Ͽ�������
    
˼·��

1. ��λ

        <!-- html -->
        <div class="b">
            <div class="a"></div>
        </div>
        
        <!-- css -->
        .b {
            position: relative;
            overflow: hidden;    <!-- a��ֻ�к�b�ص��Ĳ��ֲŻ���ʾ��ҳ���� -->
        }
        .a {
            position: absolute;
            top: -300px;
            transition: top 2s;
        }
2. α�ࣺ`���������b��ʱ��a������������`

        .b:hover .a{ top: 0; }
    �ֲ���˵ѡ������ǰ��ͬѧ�Է��ļһ￩~
3. �������� `top` ���� `height`

    ��������a, b�ȿ�ߣ�a���b��λ����ʼʱ `.a{ top: -300px; }`�� ��������a�� `top`��   
    �����Գ�ʼ `.a{ height: 0; top: 0; }`����������a�� `height`�����ʵ�֣�������ab�����ı��ڵ�ʱ����ͨ�� `line-height` ��������������ֱ�����λ�ã����ı��ڵ����ʾЧ��������Ҫ��
    