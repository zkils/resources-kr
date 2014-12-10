/**
 * Created by Administrator on 11/12/2014.
 */
$(document).ready(function(){

    initCommonFunc();
    initServicesElement();

});
function scrollDownToContent(e){
    $("body,html").animate({scrollTop:380},'5000','swing');

}

function scrollToPageByBtn(e){
    var $this = $(this);
    var targetId = $(this), $target ,targetTop;

    targetId = $this.attr("class").replace("btn",'').trim();
    $target = $("#"+targetId);
    targetTop = $target.position().top;

    $("body,html").animate({scrollTop:targetTop-100},'3000','swing');

}

function initServicesElement(){

    $("#scrollDown").on("click",scrollDownToContent);
    $(".icon-set .btn").on("click",scrollToPageByBtn);
}




