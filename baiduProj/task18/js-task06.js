/**
 * Created by eversec on 2016/6/7.
 */

// ȫ�ֵĶ��� array: �����ף��Ҳ��β
var queue = [];

var $ = function(id){
    return document.getElementById(id);
}

// ���ĸ���ť���¼�
// ��� ��
$("left-in").onclick = function() {
    // TODO: ���û������������У��
    var value= $("queue-input").value;
    queue.unshift(value);   // ��ӵ�����
    console.log("left in ");
    console.log(queue);

    renderQueue(1, value);
}
// �Ҳ� ��
$("right-in").onclick = function() {
    var value = $("queue-input").value;
    queue.push(value);      // ��ӵ���β
    console.log("right in");
    console.log(queue);

    renderQueue(2, value);
}
// ��� ��
$("left-out").onclick = function () {
    var value = queue.shift();          // �����Ƴ�
    console.log("left out");
    console.log(queue);

    renderQueue(3, value);
}
// �Ҳ� ��
$("right-out").onclick = function() {
    var value = queue.pop();            // ��β�Ƴ�
    console.log("right out");
    console.log(queue);

    renderQueue(4, value);
}

// TODO: ��θ�ÿ��Ԫ�ذ��¼���
function removeElem(){
    alert("123");
    //$("queue-show").removeChild();
}


function renderQueue(type, value) {
    var divElem = document.createElement("div");
    divElem.className = "elem";
    divElem.innerText = value;
    divElem.onclick = removeElem;

    switch(type) {
        case 1:     // ����� - ������
            $("queue-show").insertBefore(divElem, $("queue-show").firstElementChild);
            break;
        case 2:     // �Ҳ��� - ��β��
            $("queue-show").appendChild(divElem);
            break;
        case 3:     // ���� - ���׳�
            $("queue-show").removeChild($("queue-show").firstElementChild);
            alert("ɾ����������һ��Ԫ�أ�" + value);
            break;
        case 4:     // �Ҳ�� - ��β��
            $("queue-show").removeChild($("queue-show").lastElementChild);
            alert("ɾ�������Ҳ��һ��Ԫ�أ�" + value);
            break;
    }
}