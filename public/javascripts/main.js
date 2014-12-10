/**
 * Created by Administrator on 11/3/2014.
 */

$(document).ready(function(){
    initCommonFunc();
    initMain();


});

function initMain(){
    $(".carousel-indicator .btn").on("click",carouselSlide);
    $(".panel-list").children(".grid_1").on("click",showPopup);
    $(".popup .btn.close").on("click",closePopup);

}

function carouselSlide(){
    var $this = $(this);
    var index = $this.index();
    var $slide ;
    if($this.hasClass("off")){
        $slide = $(".carousel-slide");
        if(index==0){
            $slide.first().animate({
                left:0,
                duration:5000
            },"easeInCubic")
            $slide.last().animate({
                left:2400,
                duration:5000
            },"easeInCubic")
        }else{
            $slide.first().animate({
                left:-2400,
                duration:5000
            },"easeInCubic")
            $slide.last().animate({
                left:0,
                duration:5000
            },"easeInCubic")
        }
        $this.removeClass("off").addClass("on");
        $this.siblings().removeClass("on").addClass("off");
    }
}

function showPopup(){
    var $this = $(this);
    var targetName , $targetPopup;

    targetName = $this.attr("class").replace("grid_1",'').trim();
    $targetPopup = $("."+targetName+".pane").parent();

    $(".mask.panel").fadeIn().one("click",closePopup);
    $targetPopup.fadeIn();

}

function closePopup(){
    $(".mask.panel").fadeOut();
    $(".popup").fadeOut();
}