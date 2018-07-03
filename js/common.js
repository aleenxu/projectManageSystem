$(function(){
    // 日期控件
    if($.fn.datetimepicker){
        $(".form-date input").datetimepicker({
            language: 'zh-CN',//国际化语言种类
            format: "yyyy-mm-dd hh:ii",//格式
            minuteStep: 10,
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0
        }).on('changeDate', function(ev){
            debugger
            var $t = $($(ev.target).attr("date-relative"));
            console.log($t);
            if($t.size()>0){
                $t.datetimepicker('setStartDate', ev.date);
                if(ev.date>$t.datetimepicker('getDate')){
                    $($t).val("");
                }
            }
        });

    }    
});    
// 取得父窗体
var parentWin = window.parent;//获取父窗体
var brotherWin = parentWin.document.getElementById('hleftFrame').contentWindow;//父中查找子iframe
var tagArrow = brotherWin.document.getElementById('ImgArrow'); // iframe 中查元素
var brotherLeftWin = parentWin.document.getElementById('leftFrame').contentWindow;//父中查找子sidebarIframe
var leftType = brotherLeftWin.document.getElementsByClassName('MM'); // sidebarIframe 中查元素
// 隐藏左侧导航栏
function hideLeftBar(){
    var alt = $(tagArrow).attr("alt");
    if(alt == "隐藏左侧导航栏"){
        $(tagArrow).parent().trigger("click");
    }
}