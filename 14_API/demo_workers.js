let i = 0;

function timedCount() {
    i++;
    postMessage(i);
    // postMessage() 方法 - 用于将消息发送回 HTML 页面。
    setTimeout("timedCount()", 500);
}

timedCount();