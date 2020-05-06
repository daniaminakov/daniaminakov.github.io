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
        slidesToScroll: 3,
        speed: 1000,
        responsive: [{
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 595,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Слайдер2
    $('.product-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        speed: 700
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
    $(".type-syndrome .box-right .blue").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // Клики по кнопкам якорям
    $(".anchor").on("click", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    function test() {
        // 1 вопрос(если да)
        // Носите ли Вы контактные линзы?(да)
        $('#testBtn1').on("click", function() {
            $('.question1').removeClass("question-active");
            $('.question3').addClass("question-active");
        });
        // Носите ли Вы контактные линзы более 6 месяцев?(да)
        $('#testBtn3').on("click", function() {
            $('.question3').removeClass("question-active");
            $('.question2').addClass("question-active");
        });
        // Носите ли Вы контактные линзы более 6 месяцев?(нет)
        $('#testBtn4').on("click", function() {
            $('.question3').removeClass("question-active");
            $('.question4').addClass("question-active");
        });
        // Носите ли Вы линзы более 5 дней в неделю и/или более 10 часов в день?(да)
        $('#testBtn5').on("click", function() {
            $('.question4').removeClass("question-active");
            $('.question2').addClass("question-active");
        });
        // Носите ли Вы линзы более 5 дней в неделю и/или более 10 часов в день?(нет)
        $('#testBtn6').on("click", function() {
            $('.question4').removeClass("question-active");
            $('.question5').addClass("question-active");
        });

        // 1 вопрос(если нет)
        // Носите ли Вы контактные линзы?(нет)
        $('#testBtn2').on("click", function() {
            $('.question1').removeClass("question-active");
            $('.question6').addClass("question-active");
        });
        // Вам более 50 лет?(да)
        $('#testBtn7').on("click", function() {
            $('.question6').removeClass("question-active");
            $('.question7').addClass("question-active");
        });
        // Вам более 50 лет?(нет)
        $('#testBtn8').on("click", function() {
            $('.question6').removeClass("question-active");
            $('.question8').addClass("question-active");
        });
        // Имеются ли у Вас 2 и более из перечисленных признаков?(нет)
        $('#testBtn9').on("click", function() {
            $('.question8').removeClass("question-active");
            $('.question9').addClass("question-active");
        });
        // Вы испытываете сухость глаз(Эпизодически, чаще к вечеру)
        $('#testBtn10').on("click", function() {
            $('.question9').removeClass("question-active");
            $('.question10').addClass("question-active");
        });

        // Начать тест заново
        $('.question-btn2').on("click", function() {
            $('.test-wrapper .question').each(function() {
                if ($(this).hasClass("question-active")) {
                    this.classList.remove("question-active");
                    $('.question1').addClass("question-active");
                }
            });
        });
    }
    test();


    // instruction-product
    $('.instruction-item__title').on('click', function() {
        $(this).parent().toggleClass('instruction-active');
        return false;
    });


    // Phoene device section
    function windowSize() {
        if ($(window).width() <= '595') {
            const resPassivAll = document.querySelectorAll('.responsive');
            for (let i = 0; i < resPassivAll.length; i++) {
                resPassivAll[i].addEventListener('click', function() {
                    this.classList.toggle('responsive-active');
                });
            }
        }
    };

    windowSize();

    // function respClick() {

    // }
    // respClick();


});