/**
 * Created by carda on 2016/8/13.
 * @comment 事件委托
 */
var $ = function (id) {
        return document.getElementById(id);
    },
    GLOBAL_FORM = document.getElementsByTagName("form")[0],
    GLOBAL_INPUT = document.getElementsByTagName("input");


// 表单获得焦点时，下方显示表单填写规则
function focusHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        infoID = target.id + "-tip";

    if (target.type === "text" || target.type === "password") {
        $(infoID).style.visibility = "visible";
    }
}

/*
 表单失去焦点时校验表单内容
 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
 * */
function blurHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement;

    if (target.type === "text" || target.type === "password") {
        validate(target.id, target.value);
    }
}
function getLength(str) {
    return str.replace(/[^\x00-\xff]/g, "01").length;
}

function validate(inputID, value) {
    var infoID = inputID + "-tip",
        mailReg = /^[\w-]+@[\w-]+(\.[\w-]+)+$/,  // \w <==> [A-Za-z0-9_]
        phoneReg = /^1\d{10}$/,
        isValidate = true,
        errorInfo;

    if (value.trim() === '') {
        $(infoID).innerText = "不能为空";
        $(infoID).className = "info error";
        $(inputID).className = "input error";
        return;
    }

    // 根据不同类型（id）做不同校验
    switch (inputID) {
        case "name":
            if (getLength(value) < 4 || getLength(value) > 16) {
                isValidate = false;
                errorInfo = "字符数为4~16位";
            }
            break;
        case "pswd":
            if (getLength(value) < 8 || getLength(value) > 20) {
                isValidate = false;
                errorInfo = "密码长度为8~20位";
            }
            break;
        case "pswd-confirm":
            if (value !== $("pswd").value) {
                isValidate = false;
                errorInfo = "两次密码不一致";
            }
            break;
        case "mail":
            if (!mailReg.test(value)) {
                isValidate = false;
                errorInfo = "请输入正确的邮箱";
            }
            break;
        case "phone":
            if (!phoneReg.test(value)) {
                isValidate = false;
                errorInfo = "请输入正确的手机号";
            }
            break;
    }

    if (isValidate) {
        $(infoID).innerText = "格式正确";
        $(infoID).className = "info correct";
        $(inputID).className = "input correct";
    } else {
        $(infoID).innerText = errorInfo;
        $(infoID).className = "info error";
        $(inputID).className = "input error";
    }
    return isValidate;
}

// 点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹窗显示“提交成功”，否则显示“提交失败”
function formValidationHandler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        validateNum = 1;

    if (target.type === "button") {
        for (var i = 0; i < GLOBAL_INPUT.length; i++) {
            if (GLOBAL_INPUT[i].type === "text" || GLOBAL_INPUT[i].type === "password") {
                $(GLOBAL_INPUT[i].id + "-tip").style.visibility = "visible";
                if (validate(GLOBAL_INPUT[i].id, GLOBAL_INPUT[i].value)) {
                    validateNum++;
                }
            }
        }
        if (validateNum === GLOBAL_INPUT.length) {
            alert("提交成功");
        } else {
            alert("提交失败：表单验证未通过");
        }
    }
}

function bindHandler() {
    GLOBAL_FORM.addEventListener("focus", focusHandler, true);
    GLOBAL_FORM.addEventListener("blur", blurHandler, true);
    GLOBAL_FORM.addEventListener("click", formValidationHandler, true);
}

bindHandler();