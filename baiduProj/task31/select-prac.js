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


function hasOption(arr, option) {
    return arr.some(function(elem){
        return elem.value === option.value;
    });
}

function showMultiSelectedHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        content = '',
        showID = "show-" + target.id;

    for (var i = 0; i < target.options.length; i++) {
        if(target.options[i].selected === true) {

            if(hasOption(global_multiOptions, target.options[i])) {
                console.log("already in");

                global_multiOptions.remove(target.options[i]);
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
