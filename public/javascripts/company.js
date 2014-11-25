/**
 * Created by Administrator on 11/12/2014.
 */
$(document).ready(function(){

    initCommonFunc();
    initCompanyElement();

});

function initCompanyElement(){
    $("#scrollDown").on("click",scrollDownToContent);

}


function scrollDownToContent(){
    $("body").animate({scrollTop:500},'5000','swing');
}