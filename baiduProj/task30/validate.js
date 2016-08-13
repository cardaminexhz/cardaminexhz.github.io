/**
 * Created by carda on 2016/8/13.
 */
var $ = function (id) { return document.getElementById(id);},
    input;

/*
 * 表单获得焦点时，下方显示表单填写规则
 表单失去焦点时校验表单内容
 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
 点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹窗显示“提交成功”，否则显示“提交失败”
 *
 * */
// 获得焦点：focus
// 失去焦点：blur
// TODO: 事件委托

// 表单获得焦点时，下方显示表单填写规则
function showDefault(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        infoID = target.id + "-tip";

    $(infoID).style.visibility = "visible";
}

/*
 表单失去焦点时校验表单内容
 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
 * */
function checkValue(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        value = target.value,
        infoID = target.id + "-tip",
        mailReg = /^[\w-]+@[\w-]+(\.[\w-]+)+$/,  // \w <==> [A-Za-z0-9_]
        phoneReg = /^1\d{10}$/,
        validate = true,
        errorInfo;

    if(value.trim() === '') {
        $(infoID).innerText = "不能为空";
        $(infoID).className = "info error";
        target.className = "input error";
        return;
    }

    // 根据不同类型（id）做不同校验
    switch (target.id) {
        case "name":
            if(getLength(value) < 4 || getLength(value)> 16) {
                validate = false;
                errorInfo = "字符数为4~16位";
            }
            break;
        case "pswd":
            if(getLength(value) < 8 || getLength(value)> 20) {
                validate = false;
                errorInfo = "密码长度为8~20位";
            }
            break;
        case "pswd-confirm":
            if(value !== $("pswd").value) {
                validate = false;
                errorInfo = "两次密码不一致";
            }
            break;
        case "mail":
            if(!mailReg.test(value)) {
                validate = false;
                errorInfo = "请输入正确的邮箱";
            }
            break;
        case "phone":
            if(!phoneReg.test(value)) {
                validate = false;
                errorInfo = "请输入正确的手机号";
            }
            break;
    }

    if(validate) {
        $(infoID).innerText = "格式正确";
        $(infoID).className = "info correct";
        target.className = "input correct";
    } else {
        $(infoID).innerText = errorInfo;
        $(infoID).className = "info error";
        target.className = "input error";
    }

}
function getLength(str) {
    return str.replace(/[^\x00-\xff]/g,"01").length;
}

// 点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹窗显示“提交成功”，否则显示“提交失败”
function checkAllValue() {
    var artifactEvent = document.createEvent("blur");

    // TODO: 模拟事件

    input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        if(input[i].type === "text" || input[i].type === "password") {

        }
    }

}

function addHandler() {
    input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        switch (input[i].type) {
            case "text":
            case "password":
                input[i].addEventListener("focus", showDefault, false);
                input[i].addEventListener("blur", checkValue, false);
                break;
            case "button":
                input[i].addEventListener("click", checkAllValue, false);
                break;
        }

    }
}

addHandler();