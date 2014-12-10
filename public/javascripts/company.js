/**
 * Created by Administrator on 11/12/2014.
 */
$(document).ready(function(){
    initCommonFunc();
    initCompanyElement();

});


function scrollDownToContent(){
    $("body,html").animate({scrollTop:500},'5000','swing');
}

function initCompanyElement(){
    $("#scrollDown").on("click",scrollDownToContent);
}
