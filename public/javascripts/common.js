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
}


function showNavMenu(){
    var $this = $(this);
    var targetName , $target , targetLeft;

    targetName = $this.attr("class").replace("nav-item",'').trim();
    $target = $("."+targetName+".nav-menu");
    targetLeft = $this.position().left - ($target.width()/2)+ ($this.width()/3);
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

function animateToTop(){ $("body").animate({scrollTop:0},'1000','swing'); }