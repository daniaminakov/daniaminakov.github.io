
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
    autoplay:true,
    autoplayTimeout:5000,
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
function clearChecked(){
    tab1.removeAttr('checked');
    tab2.removeAttr('checked');
    tab3.removeAttr('checked');
    tab4.removeAttr('checked');
    tab5.removeAttr('checked');
    tab6.removeAttr('checked');
};

// Находим каждый слайд и заносим его в переменую
var waySlides = '.decision-slider .owl-stage-outer .owl-stage .owl-item:nth-child';
var slide1 = $(waySlides + '(5)');
var slide2 = $(waySlides + '(6)');
var slide3 = $(waySlides + '(7)');
var slide4 = $(waySlides + '(8)');
var slide5 = $(waySlides + '(9)');
var slide6 = $(waySlides + '(4)');

// Находим кнопку "next" 
var next = $('.decision-slider .owl-nav .owl-next');

// При клике на кнопку "next"
next.click(function() {
    if(slide1.hasClass('active')){
        clearChecked();
        tab2.attr('checked', 'checked');
        placeTitle.text(title2);
    }else if(slide2.hasClass('active')){
        clearChecked();
        tab3.attr('checked', 'checked');
        placeTitle.text(title3);
    }
    else if(slide3.hasClass('active')){
        clearChecked();
        tab4.attr('checked', 'checked');
        placeTitle.text(title4);
    }
    else if(slide4.hasClass('active')){
        clearChecked();
        tab5.attr('checked', 'checked');
        placeTitle.text(title5);
    }
    else if(slide5.hasClass('active')){
        clearChecked();
        tab6.attr('checked', 'checked');
        placeTitle.text(title6);
    }
    else if(slide6.hasClass('active')){
        clearChecked();
        tab1.attr('checked', 'checked');
        placeTitle.text(title1);
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
                555:{
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
};

windowSize();
