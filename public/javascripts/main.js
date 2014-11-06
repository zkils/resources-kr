/**
 * Created by Administrator on 11/3/2014.
 */

$(document).ready(function(){
    //$(".photo-slide.one").siblings().fadeOut();
    //animatePhotoSlide();
});

function animatePhotoSlide(){
    $(".photo-slide.two").animate({
        opacity: 1
    },5000, function(){
        $(".photo-slide.two").fadeOut();
        $(".photo-slide.three").animate({
            opacity: 1
        },5000,function(){
            $(".photo-slide.three").fadeOut();
            $(".photo-slide.one").animate({
                opacity: 1
            },5000,function(){
                $(".photo-slide.one").fadeOut();
            });
        });
    });
}