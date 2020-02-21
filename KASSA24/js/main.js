
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


// Клики по навигации меню
$(".navigation").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
});

// Клики по кнопкам
$(".btn-to-element").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
});

// Клик по ссылке get-programm-content
$(".get-programm-content").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
});

// Клик по ссылке tariffs-order
$(".tariffs-order").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
});


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
var slidePrev = $(waySlides + '(3)');

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

// Находим кнопку "prev" 
var prev = $('.decision-slider .owl-nav .owl-prev');
// При клике на кнопку "prev"
prev.click(function() {
    if(slide6.hasClass('active')){
        clearChecked();
        tab1.attr('checked', 'checked');
        placeTitle.text(title1);
    }else if(slidePrev.hasClass('active')){
        clearChecked();
        tab6.attr('checked', 'checked');
        placeTitle.text(title6);
    }else if(slide4.hasClass('active')){
        clearChecked();
        tab5.attr('checked', 'checked');
        placeTitle.text(title5);
    }
    else if(slide3.hasClass('active')){
        clearChecked();
        tab4.attr('checked', 'checked');
        placeTitle.text(title4);
    }
    else if(slide2.hasClass('active')){
        clearChecked();
        tab3.attr('checked', 'checked');
        placeTitle.text(title3);
    }
    else if(slide1.hasClass('active')){
        clearChecked();
        tab2.attr('checked', 'checked');
        placeTitle.text(title2);
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


// modal-characteristic
$('.underline span').click(function(){
    $('.characteristic-modal').css('display', 'flex');
});
// Close
window.onclick = function(event) {
  var modal = document.querySelector('.characteristic-modal')
  if(event.target == modal){
    $('.characteristic-modal').css("display", 'none');
  }
}
