$(function(){    
    // 根据类型渲染数据
    $(leftType).on("click","li a",function(){
        debugger
        var aa = $(this).attr("data-type");
        // alert(aa);
        // return false;
    });
    // 新建
    $("#createPro").on("click",function(){
        $(".pop-update").toggleClass("dn");
        hideLeftBar();
    });
    // 修改
    $(".ClassTable tr td .a-update").on("click",function(){
        $(".pop-update").toggleClass("dn");
        hideLeftBar();
    });
    // table td 右键功能事件
    $(".td-max-width").on("contextmenu",function(){
        var $hasDn = $(this).parents("tbody").find(".td-box-dd");
        for(var i=0;i<$hasDn.length;i++){
            if($($hasDn[i]).hasClass("sel-c")){
                $hasDn.removeClass("sel-c").addClass("dn");
                if(!$($hasDn[i]).hasClass("dn")){
                    $(this).next().addClass("dn");
                }
            }
        }
        $(this).next().removeClass("dn").addClass("sel-c");
        var _this = $(this);
        $(document).click(function(){
            _this.next().addClass("dn");
        });
        return false;
    });
    // 显示说明
    $(".td-box-dd dl dd").on("click",function(){
        $(".pop-explain").toggleClass("dn");
        hideLeftBar();
    });
    // 关闭按钮
    $(".tag-close").on("click",function(){
        $(".pop-box").addClass("dn");
    });

})
// 获取title的内容
function getTitle(o,e){
    var tagThis = $(o);
        tagThis.attr("title",tagThis.text());
}