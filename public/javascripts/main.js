/**
 * Created by Administrator on 11/3/2014.
 */

$(document).ready(function(){
    //$(".photo-slide.one").siblings().fadeOut();
    //animatePhotoSlide();
    $(".carousel-indicator .btn").on("click",carouselSlide);
});

function carouselSlide(){
    var $this = $(this);
    var index = $this.index();
    var $slide ;
    if($this.hasClass("off")){
        $slide = $(".carousel-slide");
        if(index==0){
            $slide.first().animate({
                left:0,
                duration:3000
            },"easeInCubic")
            $slide.last().animate({
                left:2400,
                duration:3000
            },"easeInCubic")
        }else{
            $slide.first().animate({
                left:-2400,
                duration:3000
            },"easeInCubic")
            $slide.last().animate({
                left:0,
                duration:3000
            },"easeInCubic")
        }

        /*
        $slide.each(function(){
            var $this = $(this);
            if(index==0){
                $this.
            }else{

            }
        });
        */
        //$slide = $(".carousel-slide").eq(index);
        $this.removeClass("off").addClass("on");
        $this.siblings().removeClass("on").addClass("off");



    }
}