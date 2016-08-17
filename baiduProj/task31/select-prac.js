/**
 * Created by carda on 2016/8/15.
 */
var $ = function (id) {
    return document.getElementById(id)
    },
    global_multiOptions = [];



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


$("single-select").addEventListener("change", showSelectedHandler, false);
$("multi-select").addEventListener("change", showMultiSelectedHandler, false);
