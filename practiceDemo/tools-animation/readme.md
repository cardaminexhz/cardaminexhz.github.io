# animation

1. transition V.S. animation
    + `transition`: һ��css���� -> ��һ��css���ԣ�ֻ������һ�εĶ�����
    + `animation`:  һ��css���� -> ��һ��css���� -> ��һ��css���� -> ����...�������ж�Ρ�
2. ��δ��� ����
    + ���嶯���������ؼ�֡( `keyframe` )�����������Ƴ�ÿ���� `keyframe` ֮��ı仯���̣�
    + ������Ӧ�õ�Ԫ���ϣ�animation ���ԡ�������һ�ζ��壬���ʹ�á�
3. ����Ӧ������
    + ��������ɫ -> ��ɫ������һ�ᣩ -> ��ɫ
    
            .className{
                animation: glow 10s forwards;  /* forwards ��������ɺ󣬱������һ������ֵ */
            }
            
            @keyframes glow {
                from { background-color: yellow; }
                25%, 75% { background-color: blue; }   /* ��25%-75% ����ɫ������Ϊ��ɫ */
                to { background-color: red; }
            }
    + ��Ӧ��ǰ׺ - `@keyframes`
        
            @keyframes glow {}
            @-webkit-keyframes glow {}
            @-moz-keyframes glow {}
            @-o-keyframes glow {}
    + ��Ӧ��ǰ׺ - `animation`
    
            animation: glow 10s,      /* ��һ��Ԫ��Ӧ�ö������ */
                       fadeIn 2s;
            -webkit-animation: ...;
            -moz-animation: ...;
            -o-animation: ...;
4. ��������
    + animation-iteration-count ���Զ��嶯���Ĳ��Ŵ�����`n` | `infinite`
    + animation-direction ���Զ����Ƿ�Ӧ���������򲥷Ŷ�����`normal` | `alternate`      
      ��� animation-direction ֵ�� `alternate`���򶯻���������������1��3��5 �ȵȣ��������ţ�����ż��������2��4��6 �ȵȣ���󲥷š�   
      ע�ͣ�����Ѷ�������Ϊֻ����һ�Σ��������û��Ч����
    + animation-play-state ���Թ涨�����������л�����ͣ��`paused` | `running`   
        - ʹ�� CSS ʱ��ֻ��һ�ַ�����Ӧ�ã�`α��`��
        - ͨ�� JS ����������ԣ����Դ��������ӵĶ�������������ӡ���ͣ����ť��
    + animation-fill-mode ���Թ涨�����ڲ���֮ǰ��֮���䶯��Ч���Ƿ�ɼ���`none` | `forwards` | `backwards` | `both`  
      `forwards` ����Ԫ�ص���ʽ����Ϊ��������ʱ�����ӡ�