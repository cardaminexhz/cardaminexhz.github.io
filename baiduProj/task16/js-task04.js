/**
 * Created by eversec on 2016/6/1.
 */

/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
var aqiData = {};

var $ = function(id) {
    return document.getElementById(id);
};

/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData() {
    var cityReg = new RegExp($("aqi-city-input").value.trim());
    var valueReg = new RegExp($("aqi-value-input").value.trim());
    var formValid = true;

    if(!cityReg.test('/^([\u4E00-\u9FA5]|[A-Za-z])+$/')) {
        $("city-error-info").style.visibility = "visible";
        console.log('city invalid');
        formValid = false;
    }
    if(!valueReg.test('/^[1-9][0-9]*$/')) {
        $("value-error-info").style.visibility = "visible";
        console.log('value invalid');
        formValid = false;
    }

    if(!formValid) {
        // ��δͨ����֤����ť��Ч
        $('add-btn').disabled = "disabled";
    } else {
        // ����֤ͨ�������û�������ӵ�aqiData


    }
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {

}

/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // ���������add-btn��һ������¼������ʱ����addBtnHandle����
    $("add-btn").onclick = function(){
        addBtnHandle();
    };

    // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����

}

/**
 * ������ js ��<head>�����룬������Ҫ�ж�ҳ�������ɺ���ִ��init;
 * ����ᵼ��Ԫ�ػ������ھ��ѱ����á�
 */
window.onload = init;

