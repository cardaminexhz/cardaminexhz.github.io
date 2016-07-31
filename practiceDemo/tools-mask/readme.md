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

 <img src="img/eg.png" width = "160" height = "100" alt="eg.png" align=center />
 <img src="./xxx.png" width = "140" height = "80" alt="rgba.png" align=center />
 
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
    2. transition һ����д���ԣ���������4���������ԡ�
        * transition-property	�涨���ù���Ч���� CSS ���Ե����ơ�
        * transition-duration	�涨��ɹ���Ч����Ҫ���������롣
        * transition-timing-function	�涨�ٶ�Ч�����ٶ����ߡ�
        * transition-delay	�������Ч����ʱ��ʼ
        
�� `mask-transition.html` �У�ʵ������Ч����˼·��

1. �ó��� border ʵ���ⲿ���
2. `:hover` ʱ������͸��Բ�ε� `width` �� `height`
3. ͨ�� `transition` ����һ�����ɶ���Ч��
4. demo ���Կ����� [say Hi](http://cardaminexhz.github.io/practiceDemo/tools-mask/mask-transition.html/) ����ͨ�� `:hover::after` ��ӡ�

***

ref: 
[Web������Ч��ʵ��̽��](https://jdc.jd.com/archives/1535)

[CSS3 Image Styles](http://webdesignerwall.com/demo/css3-image-styles/)
