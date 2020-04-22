jQuery(document).ready(function($) {

    // Клик по бургер-меню-START
    function menuClick() {
        this.classList.toggle('menu-opened');
        document.querySelector('.menu-navigation').classList.toggle('menu-active');
    }
    document.querySelector('.burger-menu').addEventListener('click', menuClick);

    // Клик по бургер-меню-END


    // scrollup-START
    $(window).scroll(function() {

        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    // scrollup-END



    // Слайдер1
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        infinite: true,
        speed: 300
    });

    // Слайдер2
    $('.product-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        speed: 300
    });


    // Клики по кнопкам PAGE - Синдром сухого глаза - меню
    $(".syndrome-menu-wrapper").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // Клики по кнопкам PAGE - Синдром сухого глаза - Кто в группе риска?
    $(".box-right .blue").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    // Test
    $('#testBtn1').on("click", function() {
        $('.question1').removeClass("question-active");
        $('.question2').addClass("question-active");
    });

    $('#testBtn2').on("click", function() {
        $('.question1').removeClass("question-active");
        $('.question3').addClass("question-active");
    });

    $('#testBtn3').on("click", function() {
        $('.question2').removeClass("question-active");
        $('.question4').addClass("question-active");
    });

    $('#testBtn4').on("click", function() {
        $('.question3').removeClass("question-active");
        $('.question5').addClass("question-active");
    });

    $('#testBtn5').on("click", function() {
        $('.question5').removeClass("question-active");
        $('.question6').addClass("question-active");
    });

    $('.question-btn2').on("click", function() {
        $('.test-wrapper .question').each(function() {
            if ($(this).hasClass("question-active")) {
                this.classList.remove("question-active");
                $('.question1').addClass("question-active");
            }

        });
    });



    // instruction-product
    $('.instruction-item__title').on('click', function() {
        $(this).parent().toggleClass('instruction-active');
        return false;
    });

});