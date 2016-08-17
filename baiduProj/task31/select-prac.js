/**
 * Created by carda on 2016/8/15.
 */
var $ = function (id) {
    return document.getElementById(id)
    },
    global_multiOptions = [],
    global_srcOption;



function showSelectedHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        index = target.selectedIndex,
        content = '',
        showID = "show-" + target.id;

    content += "index: " + index;
    content += "; value: " + target.options[index].value;
    content += "; text: " + target.options[index].text;

    $(showID).innerHTML = content;
}


// 存在，返回index; 不存在，返回-1 (Boolean(0) === false)
function hasOption(arr, option) {
    var flag = false,
        pos;

    arr.forEach(function (elem, index) {
        if(elem.value === option.value) {
            flag = true;
            pos = index;
        }
    });

    return (flag ? pos : -1);
}

function showMultiSelectedHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        content = '',
        showID = "show-" + target.id,
        pos;

    for (var i = 0; i < target.options.length; i++) {
        if(target.options[i].selected === true) {
            pos = hasOption(global_multiOptions, target.options[i]);
            if(pos != -1) {
                global_multiOptions.splice(pos, 1);
                target.options[i].className = "default";
            } else {
                global_multiOptions.push(target.options[i]);
                target.options[i].className = "selected";
            }
        }
    }

    global_multiOptions.forEach(function(elem) {
        content += "value: " + elem.value;
        content += "; text: " + elem.text + "<br>";
    });
    $(showID).innerHTML = content;
}


function addSrcOptions(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement;

    for(var i = 0; i < target.options.length; i++) {
        if(target.options[i].selected === true) {
            global_srcOption = target.options[i];
        }
    }
}

function moveOptionHandler() {
    if(global_srcOption) {
        $("move-select2").appendChild(global_srcOption);
        global_srcOption = null;
    } else {
        alert("请选择要移动的option");
        return;
    }
}


function addOptionHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        text = target.value,
        option;

    option = new Option(text, "");
    $("add-select").appendChild(option);
    target.value = "";
}

function searchOptionHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        text = target.value,
        addSelect = $("add-select");

    for(var i = 0; i < addSelect.options.length; i++) {
        addSelect.options[i].className = "default";
        if(addSelect.options[i].text === text) {
            //  TODO: 如何让滚动条自动滚到该位置
            addSelect.options[i].className = "selected";
        }
    }
}

$("single-select").addEventListener("change", showSelectedHandler, false);
$("multi-select").addEventListener("change", showMultiSelectedHandler, false);

$("move-select1").addEventListener("change", addSrcOptions, false);
$("move-icon").addEventListener("click", moveOptionHandler, false);

$("add-input").addEventListener("blur", addOptionHandler, false);
$("add-input").addEventListener("keyup", searchOptionHandler, false);