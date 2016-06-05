/**
 * @comment 点击按钮时验证输入逻辑；提示方式：自定义文本。
 *          再一次使用了 arrayObj.forEach 和 arrayObj.filter()，代码逻辑清晰。
 * Created by cardaminexhz on 2016/6/1.
 */

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = [];

var $ = function(id) {
    return document.getElementById(id);
};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = $("aqi-city-input").value.trim();
    var value = $("aqi-value-input").value.trim();
    //var cityPattern = new RegExp("^([A-Za-z]+\\s?)*[A-Za-z]$");
    var cityPattern = /(^[\u4E00-\u9FA5]+$)|(^([A-Za-z]+\s?)*[A-Za-z]$)/;
    // new RegExp("^([A-Za-z]+\\s?)*[A-Za-z]$")
    // 才等价于 /^([A-Za-z]+\s?)*[A-Za-z]$/

    var valuePattern = new RegExp("^[0-9]+$"); // /^\d+$/
    var formValid = true;

    if(!cityPattern.test(city)) {
        $("city-error-info").style.visibility = "visible";
        console.log(cityPattern+' city invalid: ' + city);
        formValid = false;
    }
    if(!valuePattern.test(value)) {
        $("value-error-info").style.visibility = "visible";
        console.log('value invalid: ' + value);
        formValid = false;
    }

    if(!formValid) {
        // 表单未通过验证，按钮无效
        $('add-btn').disabled = "disabled";
    } else {
        // 表单验证通过，将用户输入添加到aqiData
        var item = {};
        item.name = city;
        item.value = value;
        aqiData.push(item);
    }

    console.log("aqiData: " + aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var contentStr = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";

    aqiData.forEach(function(elem, index) {
        contentStr += "<tr><td>" + elem.name + "</td><td>" + elem.value + "</td>" +
            '<td><button onclick="delBtnHandle(\''+index+'\')">删除</button></td></tr>';
    })

    $('aqi-table').innerHTML = contentStr;
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
function delBtnHandle(deleteIndex) {
    // do sth.
    aqiData = aqiData.filter(function(elem, index) {
        return index != deleteIndex;
    })

    renderAqiList();
}

function reset() {
    $("aqi-city-input").value = '';
    $("aqi-value-input").value = '';
    $("city-error-info").style.visibility = "hidden";
    $("value-error-info").style.visibility = "hidden";
    $('add-btn').removeAttribute("disabled");
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    $("add-btn").onclick = function(){
        addBtnHandle();
    };

    // 重置表单
    $("reset-btn").onclick = function() {
        reset();
    }

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

/**
 * 此例中 js 在<head>处引入，所以需要判断页面加载完成后，再执行init;
 * 否则会导致元素还不存在就已被调用。
 */
window.onload = init;

