/**
 * Created by carda on 2016/8/15.
 */
var $ = function (id) { return document.getElementById(id)},
    cityArr = [
        {value:"beijing", text:"北京"},
        {value:"shanghai", text:"上海"},
        {value:"shenzhen", text:"深圳"}
    ],
    schoolArr = [{
            city: "beijing", school: [{value: "1", text: "北京大学"}, {value: "2", text: "鹦鹉猫驻北京小组"}]
        }, {
            city: "shanghai", school: [{value: "1", text: "同济大学"}, {value: "2", text: "鹦鹉猫驻上海小组"}]
        }, {
            city: "shenzhen", school: [{value: "1", text: "HIT"}, {value: "2", text: "鹦鹉猫驻深圳小组"}]
        }
    ];

function toggleGroupHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement;

    if(target.type === "radio") {
        switch (target.value) {
            case "inschool":
                $("inschool-group").style.display = "block";
                $("outschool-group").style.display = "none";
                break;
            case "outschool":
                $("inschool-group").style.display = "none";
                $("outschool-group").style.display = "block";
                break;
        }
    }
}

function changeSchoolHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        index = target.selectedIndex,
        city = target.options[index].value;

    addSchools(city);
}

function addSchools(city){
    var options;

    schoolArr.forEach(function(elem){
        if(elem.city === city) {
            options = elem.school;
        }
    });

    clearOptions("school-select");
    addOptions("school-select", options);

}

// 操作select
function addOptions(selectID, options) {
    options.forEach(function (elem) {
        $(selectID).options.add(new Option(elem.text, elem.value));
    })
}
function clearOptions(selectID) {
    $(selectID).options.length = 0;
}

window.onload = function() {
    // 动态添加 options
    addOptions("city-select", cityArr);
    addSchools($("city-select").options[$("city-select").selectedIndex].value); // 初始化

    // 非侵入式js
    $("radio-group").addEventListener("click", toggleGroupHandler, false);   // 事件委托

    $("city-select").addEventListener("change", changeSchoolHandler, false);
};