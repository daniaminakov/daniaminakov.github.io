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
$("#phone").mask('000 000 00 00');


// Submit-form





});