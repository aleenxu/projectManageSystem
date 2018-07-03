$(function(){    
    // 详细按钮
    $(".ClassTable tr td .a-detail").on("click",function(){
        $(".pop-detail").toggleClass("dn");
        hideLeftBar();
    });
    // 新建工程
    $("#createPro").on("click",function(){
        $(".pop-update").toggleClass("dn");
        hideLeftBar();
    });
    // 修改按钮
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
    // 显示评价、更换
    $(".td-box-dd dl dd").on("click",function(){
        if($(this).text() == "评价"){
            $(".pop-evaluate").toggleClass("dn");
            hideLeftBar();
        }else{
            $(".pop-turn").toggleClass("dn");
            hideLeftBar();
        }
    });
    // 评价得分
    var $scoreOne = $("#scoreOne");//显示扣分 1:1
    var $scoreFive = $("#scoreFive");//显示扣分 1:5
    var $scoreTotal = $("#scoreTotal");//显示总分 
    var totalScore = 0;
    // 统计表单得分
    function countScore(){
        totalScore = 0;
        $(".tab-evaluate .select-s2").each(function(index,obj){
            var num = 5; //扣分的基准
            if(index==0){
                $scoreOne.text(Number(obj.value));
                totalScore -= Number(obj.value);
            }else if(index==1){
                $scoreFive.text(Number(obj.value)*num);
                totalScore -= Number(Number(obj.value)*num);
            }else{
                totalScore += obj.value == "请选择"?0:Number(obj.value);
            }
        });
    }
    // 根据分数选中
    function radioScore(){
        $(".tab-evaluate .flex-box input").each(function(index,obj){
            debugger
            if(totalScore >= 85 && index == 0){
                $(obj).prop("checked",true);
            }else if(totalScore >=75 && totalScore < 85 && index == 1){
                $(obj).prop("checked",true);
            }else if(totalScore < 75 && index == 2){
                $(obj).prop("checked",true);
            }
        });
    }
    $(".tab-evaluate .select-s2").on("change",function(){//表单发生改变得分
        countScore();
        radioScore();
        $scoreTotal.text(totalScore);
    })
    
    // checkbox radio 选中问题
    $(".icon-check").on("click",function(){
        var $checked = $(this).toggleClass("icon-checked").hasClass("icon-checked");
        var $isSg =$("#isSg");
        var $isFs =$("#isFs");
        if($checked){
            $(this).next().prop("checked",true);
            var $radio = $(this).attr("pro-only");
            if($radio != undefined){
                if($radio == "isFs"){
                    if($isFs.hasClass("icon-checked")){
                        $isFs.toggleClass("icon-checked").next().prop("checked",false);
                    }
                }else{
                    if($isSg.hasClass("icon-checked")){
                        $isSg.toggleClass("icon-checked").next().prop("checked",false);
                    }
                }
            }
        }else{
            $(this).next().prop("checked",false);
        }
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