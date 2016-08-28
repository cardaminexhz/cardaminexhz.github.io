/**
 * Created by carda on 2016/8/28.
 */
var $ = function(id) { return document.getElementById(id); };

// new message: raise newMessage event
function handler(ev) {
    var event = ev || window.event,
        target = event.target || event.srcElement,
        msg;

    event.preventDefault();
    msg = $("msg").value.trim();

    var newMessageEvent = new CustomEvent("newMessage", {
        detail: {
            message: msg,
            time: new Date()
        }
    });

    target.dispatchEvent(newMessageEvent);
}

// newMessage event handler
function newMessageHandler(e) {
    console.log(
        "Event subscriber on "+e.currentTarget.nodeName+", "
        +e.detail.time.toLocaleString()+": "+e.detail.message
    );
}


window.onload = function() {
    $("msgbox").addEventListener("submit", handler, false);

    // listen for newMessage event
    document.addEventListener("newMessage", newMessageHandler, false);
};