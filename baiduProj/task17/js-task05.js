/**
 * Created by cardaminexhz on 2016/6/6.
 */
/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
};

var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95',
    '#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce', '#d7f0f8'];

var $ = function(id){
    return document.getElementById(id);
};

// 计算柱状图宽 etc.
function getWidth(wrapWidth, barNum) {
    var posObj = {};
    posObj.width = Math.floor( wrapWidth / (barNum*2) );    // 设置bar间隔与bar宽度相同; Math.floor(num) 取不小于num的最大整数
    posObj.left = Math.floor( wrapWidth / barNum );
    posObj.offsetLeft = Math.floor( (wrapWidth - posObj.left*(barNum-1) - posObj.width)/2 );
    return posObj;
}

/**
 * 渲染图表
 */
function renderChart() {
    // 获取父元素 wrap 的宽、高
    var wrapWidth = document.querySelector(".aqi-chart-wrap").clientWidth;
    var wrapHeight = document.querySelector(".aqi-chart-wrap").clientHeight;
    console.log(wrapHeight +" : " +wrapWidth);


    // 动态生成每个 bar 的 height(与父元素的比例%)；width(根据bar条数来定)；left(位置); color(随机)
    var dataKeyArr = Object.keys(chartData);    // chartData 是由key-value对组成的object，无法直接求得obj.length；将其key转化成array
    var barNum = dataKeyArr.length;
    var posObj = getWidth(wrapWidth, barNum);


    // 生成 div bar
    var contentStr = "";
    for(var key in chartData) {
        var barHeight = Math.floor( chartData[key] / wrapHeight * 100 );  // bar height设为与父元素高度的百分比
        var leftBarNum = dataKeyArr.indexOf(key);

        contentStr += '<div class="bar" style="height:' + barHeight + '%; width:' + posObj.width + 'px; ' +
            'left:' + ( posObj.offsetLeft + posObj.left * leftBarNum )+'px;' +
            'background-color:' + colors[Math.floor(Math.random() * 11)]+'"></div>';
    }

    document.querySelector("div.aqi-chart-wrap").innerHTML = contentStr;

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    var dateRadioObj = document.getElementsByName("gra-time");
    var dateGrain;
    for(var i = 0; i < dateRadioObj.length; i++) {
        if(dateRadioObj[i].checked) {
            dateGrain = dateRadioObj[i].value;
        }
    }
    console.log(dateGrain);
    if(dateGrain === pageState.nowGraTime) {   // radio 未发生变化，返回
        return;
    } else {
        pageState.nowGraTime = dateGrain;
    }

    // 设置对应数据

    // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化
    var selectedIndex = $("city-select").selectedIndex;
    var selectedCity = $("city-select").options[selectedIndex].value;

    if(selectedIndex === pageState.nowSelectCity) {
        return;                                    // selected option 未发生变化，返回
    } else {
        pageState.nowSelectCity = selectedIndex;   // 更新全局变量
    }

    // 设置对应数据
    for(var item in aqiSourceData) {
        if(item === selectedCity) {
            chartData = aqiSourceData[item];
            break;
        }
    }

    // 调用图表渲染函数
    renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    $("form-gra-time").onclick = function() {
        graTimeChange();
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    var optionList = "";
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    for(var item in aqiSourceData) {
        console.log(item);
        console.log(aqiSourceData[item]);
        optionList += "<option>" + item + "</option>";
    }
    $("city-select").innerHTML = optionList;

    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    $("city-select").onclick = function() {
        citySelectChange();
    }

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
}

/**
 * 此例中 js 在<head>处引入，所以需要判断页面加载完成后，再执行init;
 * 否则会导致元素还不存在就已被调用。
 */
window.onload = init;
