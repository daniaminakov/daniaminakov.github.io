jQuery(document).ready(function($){

// scrollup-START
$(window).scroll(function(){

    if ($(this).scrollTop() > 1000) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});
// scrollup-END


// terminal-carousel-START
$('.terminal-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
})
// terminal-carousel-END



// decision-slider-START
$('.decision-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    mouseDrag : false,
    touchDrag : false,
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
})


// // Находим контейнер слайдера
var owlWpapper = $('.decision-slider .owl-stage');

// // Находим все title табов
var title1 = $('.decision-tabs label:nth-child(2)').text();
var title2 = $('.decision-tabs label:nth-child(4)').text();
var title3 = $('.decision-tabs label:nth-child(6)').text();
var title4 = $('.decision-tabs label:nth-child(8)').text();
var title5 = $('.decision-tabs label:nth-child(10)').text();
var title6 = $('.decision-tabs label:nth-child(12)').text();

// Находим все табы
var tab1 = $('#tab-1');
var tab2 = $('#tab-2');
var tab3 = $('#tab-3');
var tab4 = $('#tab-4');
var tab5 = $('#tab-5');
var tab6 = $('#tab-6');

// // Место куда нужно выводить title
var placeTitle = $('.decision-top-title');

// Очистка "checked" у всех input'ов
function deleteChecked(){
    tab1.removeAttr('checked');
    tab2.removeAttr('checked');
    tab3.removeAttr('checked');
    tab4.removeAttr('checked');
    tab5.removeAttr('checked');
    tab6.removeAttr('checked');
};

// Находим кнопку "next" 
var next = $('.decision-slider .owl-nav .owl-next');

// При клике на кнопку "next"
next.click(function(){
    if(owlWpapper.prop("style")["transform"] == 'translate3d(-3900px, 0px, 0px)'){
        deleteChecked();
        tab1.attr('checked', 'checked');
        placeTitle.text(title1);
    }
    else if(owlWpapper.prop("style")["transform"] == 'translate3d(-5200px, 0px, 0px)'){
        deleteChecked();
        tab2.attr('checked', 'checked');
        placeTitle.text(title2);
    }
    else if(owlWpapper.prop("style")["transform"] == 'translate3d(-6500px, 0px, 0px)'){
        deleteChecked();
        tab3.attr('checked', 'checked');
        placeTitle.text(title3);
    }
    else if(owlWpapper.prop("style")["transform"] == 'translate3d(-7800px, 0px, 0px)'){
        deleteChecked();
        tab4.attr('checked', 'checked');
        placeTitle.text(title4);
    }
    else if(owlWpapper.prop("style")["transform"] == 'translate3d(-9100px, 0px, 0px)'){
        deleteChecked();
        tab5.attr('checked', 'checked');
        placeTitle.text(title5);
    }
    else if(owlWpapper.prop("style")["transform"] == 'translate3d(-10400px, 0px, 0px)'){
        deleteChecked();
        tab6.attr('checked', 'checked');
        placeTitle.text(title6);
    }
});
// decision-slider-END

// tariffs-carousel-START


function windowSize(){
    if ($(window).width() <= '755'){
        $('.tariffs').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            mouseDrag : true,
            touchDrag : true,
            responsive:{
                0:{
                    items:1
                },
                554:{
                    items:2
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })
    }
}

windowSize();


// $(window).on('resize', function () {
//     if ($(window).width() < 576) {
//         alert('<576');


//     }
// })
// tariffs-carousel-END


});