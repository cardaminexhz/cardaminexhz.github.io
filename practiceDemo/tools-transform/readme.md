# transform

* transform 
    + ����ҳԪ�ؽ��б任
    + ����Χ��Ԫ�ز������Ӱ�� - �������²��֣������ƿ�����Ԫ�أ�e.g. ĳԪ�سߴ�Ŵ�ʱ��������ΧԪ���ص���

* `rotate` ��ת  

        transform: rotate(45deg);   /* ˳ʱ����ת45�� */
        transform: rotate(-45deg);  /* ��ʱ����ת45�� */
* `scale` ����  

        transform: scale(2);
    + `scale(���ű���)` 
    + ���ű��� * ��ǰ�ߴ�
    + ���ű��ʣ�0-1����С��>1���Ŵ�
    + `scaleX()` `scaleY()`
    + Ҫʼ�հѷ����߷������ϣ�������ô����CSS����Ҫȷ����ҳ�����ɶ���
    + ����������ƹ���ť����ť���`scale` + `transition`
    
            .enlarge {
                transition: transform 1s;
            }
            .enlarge:hover {
                transform: scale(1.2);
            }
* `translate` ��һ��Ԫ�ش������е�λ���� ��/��/��/�� �ƶ�һ���ľ���

        transform: translate(x, y);
    + x, ��ֵ-���ң�y����ֵ-����
    + ֧���κ���Ч�ĳ��ȵ�λ��`px` `em` `%`
    + `translateX()` `translateY()`
    + ��ԭʼλ������һ���հ׿ո����µ�λ�û���
    + ������
        - ����������������״̬����ϸ΢���ƶ�
        - `translate` + `transition` ��ģ��Ԫ���ƶ�������������Ļ
* `skew` ��X��/Y����б

        transform: skew(xdeg, ydeg)
    + `skewX()` `skewY()`
* ��� transform ���ã���Ӧ��ǰ׺

        transform: rotate(45deg) scale(2);
        -webkit-transform: ...;
        -moz-transform: ...;
        -o-transform: ...;
* `transform-origin` �л��任���ĵ�
    + Ĭ������£��������Ԫ�ص����ĵ���Ϊ�任��
    + ֧�� `�ؼ���ֵ`����`px`Ϊ��λ�ľ���ֵ����`em` `%`Ϊ��λ�����ֵ
    + ����
    
            /* Χ�����Ͻǵ���ת */
            transform-origin: top left;  /* �ؼ���ֵ */
            transform-origin: 0 0;       /* pixel */
            transform-origin: 0% 0%;     /* percentage */
    + ��ֻ���� translate �Ż��ƶ���Ԫ�أ�`transform-origin`������Ӱ�졣
