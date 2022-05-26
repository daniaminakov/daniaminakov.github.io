jQuery(document).ready(function($) {
    // AOS init
    AOS.init();
    // LazyLad init
    $('.lazy').lazy();

    // Клик по кнопкам меню
    $(".header-menu li a").on("click", function(e) {
        var anchor = $(this).attr('href');
        if ($(anchor).length > 0) {
            e.preventDefault();
            $('.burger-menu').removeClass('active');
            $('.header-menu').removeClass('active');
            $('html, body').stop().animate({
                scrollTop: $(anchor).offset().top - 0
            }, 1000);
        }
    });

    // Бургер меню
    $('.burger-menu').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header-menu').addClass('active');
        } else {
            $(this).removeClass('active');
            $('.header-menu').removeClass('active');
        }
    });


    // Паралкас
    $(window).scroll(function() {
        var target = $('.parallax');
        var scrolled = $(window).scrollTop();
        target.each(function(index) {
            var rate = scrolled * $(target[index]).attr('dara-rate');
            $(target[index]).css({
                "transform": "translate3d(0px, " + rate + "px, 0px)"
            });
        });
    });


    // Слайдер
    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    // Слайдер
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // Слайдер
    $('.price-box').slick({
        responsive: [{
                breakpoint: 5000,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    infinite: false,

                }
            },
        ]
    });


    // Слайдер
    $('.team-slider').slick({
        responsive: [{
                breakpoint: 5000,
                settings: "unslick"
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


});