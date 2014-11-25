/**
 * Created by Administrator on 11/12/2014.
 */
$(document).ready(function(){

    initCommonFunc();


    initContactElement();

});

function initContactElement(){
    initializeMap();
    $("#scrollDown").on("click",scrollDownToAddress);
}

function initializeMap() {
    var mapCanvas = document.getElementById('map-canvas');
    var myLatlng =  new google.maps.LatLng(37.5676503, 126.9881285);

    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Re:Sources Korea'
    });
}

function scrollDownToAddress(){
    $("body").animate({scrollTop:500},'3000','swing')
}