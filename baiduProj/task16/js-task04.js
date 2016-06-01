/**
 * Created by eversec on 2016/6/1.
 */

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

var $ = function(id) {
    return document.getElementById(id);
};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
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
        // 表单未通过验证，按钮无效
        $('add-btn').disabled = "disabled";
    } else {
        // 表单验证通过，将用户输入添加到aqiData


    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    $("add-btn").onclick = function(){
        addBtnHandle();
    };

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

/**
 * 此例中 js 在<head>处引入，所以需要判断页面加载完成后，再执行init;
 * 否则会导致元素还不存在就已被调用。
 */
window.onload = init;

