# cardaminexhz.github.io

* ����

***

* `px` `em` `rem`
    + Font Size Idea: `px` at the Root, `rem` for Components, `em` for Text Elements
    + `px` ��pixel�����������ʾ������Ļ�ֱ��ʡ�
    + `em` ����ڵ�ǰ�������ı�������ߴ硣��δ���ã���������������Ĭ������ߴ硣
        �����������Ĭ������ߣ�16px��  
        `1em = 16px` `12px = 0.75em`
    + `rem` ��root em����em������css3������һ����Ե�λ��   
        ʹ�� rem ���������Сʱ����Ե���html��Ԫ�ء�  
        ������ֻ�޸ĸ�Ԫ�أ��Ϳ��Գɱ����ص��������������С��
    
    > While em is relative to the font-size of its direct or nearest parent, rem is only relative to the html (root) font-size.
    
    <img src="font-size.png" width="450px" height="350px">
    
        /* Document level adjustments */
        html {
          font-size: 16px;
        }
        @media (max-width: 900px) {
          html { font-size: 15px; }
        }
        @media (max-width: 400px) {
          html { font-size: 13px; }
        }
        
        /* Modules will scale with document */
        .header {
          font-size: 1.5rem;
        }
        .footer {
          font-size: 0.75rem;
        }
        .sidebar {
          font-size: 0.85rem;
        }
        
        /* Type will scale with modules */
        h1 {
          font-size: 3em;
        }
        h2 {
          font-size: 2.5em;
        }
        h3 {
          font-size: 2em;
        }

***

* ����ͼ����������ν�� `background: url(back.jpg) repeat;

***

ref:  
[Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/)
