/**
 * Created by carda on 2016/8/14.
 */

var xhr = new XMLHttpRequest();

xhr.open("get", "http://localhost:3000/posts", true);

xhr.setRequestHeader("Cache-Control", "max-age=10000");


xhr.onreadystatechange = function () {
    console.log(xhr.state);
    //  unsent, opened, headers received, loading, and done
    switch (xhr.readyState) {
        case 0:
            console.log("0-unsent: before open()");
            break;
        case 1:
            console.log("1-opened: before send()");
            break;
        case 2:
            console.log("2-headers received: after send(), before response()");
            break;
        case 3:
            console.log("3-loading: receiving response");
            break;
        case 4:
            console.log("4-done: finished: response received");
            if((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {
                console.log(xhr.responseText);
            } else {
                console.log("request unsuccessful: " + xhr.status);
            }
    }
};

xhr.send(null);

