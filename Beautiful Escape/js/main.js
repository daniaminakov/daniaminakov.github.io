$(document).ready(function(){


// +scrollup

$(".menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });

$(window).scroll(function(){

    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

// -scrollup


// +owl-carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    smartSpeed:1300,
    dots:false,
    responsive:{
        0:{
            items:1,
            loop:true
        },
        1200:{
            items:3,
            loop:true
        },
    }
})
$('#shopSliderLeft').click(function(){
    $('.owl-carousel').trigger('prev.owl.carousel');
});
$('#shopSliderRight').click(function(){
    $('.owl-carousel').trigger('next.owl.carousel');
});


// -owl-carousel


// +Proleaer

function preloader() {
    $(() => {

        setInterval(() => {

            let p = $('.preloader');
            
            p.css('opacity', 0);
            
            setInterval (
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
                );
            
        }, 1000);
    });
}

preloader();

// -Proleaer

});