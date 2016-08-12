var $ = function(id) { return document.getElementById(id);};


$("validate-btn").addEventListener("click", checkValue, false);

function checkValue() {
    var input = $("input").value;

    console.log("checkValue");
    console.log(input);

    if (input.trim() === "") {
        $("tip").innerText = "名称不能为空";
        $("tip").className = "info error";
        return;
    }

    if(getLength(input) < 4 || getLength(input)> 16) {
        validate = false;
        $("tip").innerText = "字符数为4~16位";
        $("tip").className = "info error";
        return;
    }

    $("tip").innerText = "名称格式正确";
    $("tip").className = "info correct";
}

function getLength(str) {
    /*
     * 1.字符数为4~16位
     2.每个英文字母、数字、英文符号长度为1
     3.每个汉字，中文符号长度为2
     把双字节的替换成两个单字节的然后再获得长度
     http://blog.sina.com.cn/s/blog_9211608d01013ynh.html
     http://blog.csdn.net/testcs_dn/article/details/21412303
     * */
    return str.replace(/[^\x00-\xff]/g,"01").length;
}