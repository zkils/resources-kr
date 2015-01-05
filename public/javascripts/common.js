


function showNavMenu(){
    var $this = $(this);
    var targetName , $target , targetLeft;

    targetName = $this.attr("class").replace("nav-item",'').trim();
    $target = $("."+targetName+".nav-menu");
    targetLeft = $this.offset().left - ($target.width()/2)+ ($this.width()/3);
    $target.css("left",targetLeft+"px");
    $target.stop();
    $target.siblings(".nav-menu").stop().fadeOut();

    $(".menu-mask").show();

    $target.fadeIn(100);
}

function hideNavMenu(){
    $(".nav-menu:visible").stop().fadeOut();
    $(".menu-mask").hide();
}

function animateToTop(){
    $("body,html").animate({scrollTop:0},'1000','swing');

}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
}

function scrollToPage(){
    var pageId = $.urlParam('pageid');
    if(pageId){
        $("body,html").animate({scrollTop:$(".page."+pageId).offset().top-100},'1000','swing');
    }
}

function setColorMenuButton(){
    var pageId = $.urlParam('pageid');
    if(pageId){

    }
}

function setDoodleAnimation(){
    $("#title").on("mouseover",function(){
        var $soundClip = $("#soundClip")[0];
        $("#title").stop().fadeOut();
        $("#doodle").stop().fadeIn();
        $soundClip.currentTime=0;
        $soundClip.play();
    });
    $("#doodle").on("mouseout",function(){
        $("#title").stop().fadeIn();
        $("#doodle").stop().fadeOut();
        $("#soundClip")[0].pause();
    }).on("click",function(){
        window.location.href = "/";
    });
}


function initCommonFunc() {
    $(".btn.top").on("click", animateToTop);
    //$(".nav-item.company").on("mouseover",showMenu).on("mouseleave",hideMenu);
    $(".nav-item.company").on({
        mouseenter: showNavMenu
    });
    $(".nav-item.services").on({
        mouseenter: showNavMenu
    });
    //$(".nav").on("mouseleave",hideNavMenu);

    $(".menu-mask").on("mouseleave", hideNavMenu);
    $(".nav-menu").on("mouseleave", hideNavMenu);
    $(window).scroll(hideNavMenu);

    setTimeout("scrollToPage()",100);
    setColorMenuButton();
    //setDoodleAnimation();
}