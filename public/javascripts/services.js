/**
 * Created by Administrator on 11/12/2014.
 */
$(document).ready(function(){

    initCommonFunc();
    initServicesElement();

});

function initServicesElement(){
    $("#scrollDown").on("click",scrollDownToContent);
    $(".icon-set .btn").on("click",scrollToPage);
}


function scrollDownToContent(){
    $("body").animate({scrollTop:500},'5000','swing');
}

function scrollToPage(){
    var $this = $(this);
    var targetId = $(this), $target ,targetTop;

    targetId = $this.attr("class").replace("btn",'').trim();
    $target = $("#"+targetId);
    targetTop = $target.position().top;

    $("body").animate({scrollTop:targetTop-100},'3000','swing')



}