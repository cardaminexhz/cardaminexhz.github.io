/**
 * @comment 输入框失去焦点时验证输入逻辑；提示方式：自定义文本。
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
 * 输入框失去焦点时，验证有效性
 * @param type
 *          验证类型。1.城市名：中英文字符；2.空气质量：整数
 * @param id
 *          触发事件的节点id
 */
function checkInput(type, id) {
    // regexp：中英文字符
    var characterPattern = new RegExp("^([\u4E00-\u9FA5]|[A-Za-z])+$");
    // regexp：整数
    var digitalPattern = new RegExp("^[0-9]+$"); // /^\d+$/

    var str = $(id).value.trim();
    var validFlag = true;

    // 1 中英文字符
    if(type === 1) {
        if(!characterPattern.test(str)) {
            validFlag = false;
        }
    }
    // 2 整数
    if(type === 2) {
        if(!digitalPattern.test(str)) {
            validFlag = false;
        }
    }

    if(validFlag) {
        $(id+"-errorhint").style.visibility = "hidden";
        $('add-btn').removeAttribute("disabled");
    } else {
        // 表单验证无效：显示错误提示信息；禁用提交按钮。
        $(id+"-errorhint").style.visibility = "visible";
        $('add-btn').disabled = "disabled";
    }
}


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var item = {};
    item.name = $("aqi-city-input").value.trim();
    item.value = $("aqi-value-input").value.trim();
    aqiData.push(item);
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
    $("aqi-city-input-errorhint").style.visibility = "hidden";
    $("aqi-value-input-errorhint").style.visibility = "hidden";
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

