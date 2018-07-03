$(function(){
    $("#loginBtn").on("click",function(){
        $.myAlert({
            title:"提示",
            message:"登录成功",
            callback:function(){
                location.href="indexIframe.html";
            }
        });
        return false;
    });
});