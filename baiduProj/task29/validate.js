var $ = function(id) { return document.getElementById(id);};

$("input").addEventListener("keyup", checkValue, false);
$("validate-btn").addEventListener("click", checkValue, false);

function checkValue() {
    var input = $("input").value;

    if (input.trim() === "") {
        $("tip").innerText = "名称不能为空";
        $("tip").className = "info error";
        $("input").className = "input error";
        return;
    }

    if(getLength(input) < 4 || getLength(input)> 16) {
        $("tip").innerText = "字符数为4~16位";
        $("tip").className = "info error";
        $("input").className = "input error";
        return;
    }

    $("tip").innerText = "名称格式正确";
    $("tip").className = "info correct";
    $("input").className = "input correct";
}

function getLength(str) {
    return str.replace(/[^\x00-\xff]/g,"01").length;
}