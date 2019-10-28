$(document).ready(function(){

// Owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    navText : ["",""],
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// maskedinput

$("#phone").mask("999 99 99").on('click', function () {
    if ($(this).val() === '___ __ __') {
        $(this).get(0).setSelectionRange(0, 0);
    }
});


});
