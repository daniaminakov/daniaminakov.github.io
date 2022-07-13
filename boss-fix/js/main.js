jQuery(document).ready(function($) {

    // Клик по lang меню
    $('.lang').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    // Если клик был не по lang меню и его дочерним элементам - скрываем меню
    $(document).mouseup(function(e) {
        var lang = $(".lang");
        if (!lang.is(e.target) && lang.has(e.target).length === 0) {
            $(lang).removeClass('active');
        }
    });

    $('.lang .current').click(function(e) {
        e.preventDefault();
    });


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

    // Слайдер
    $('.header-video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        // swipe: false,
    });


    function videoInit(parent, autoPlayNumber) {
        // Получите идентификатора видео из элемента
        var videoLink = parent.attr('data-watch');
        console.log(videoLink);
        videoLink = videoLink.replace('https://www.youtube.com/watch?v=', '');

        // Автовоспроизведение при появлении модального окна
        var autoplay = '?autoplay=0';

        // Если задан autoPlayNumber
        if (autoPlayNumber) {
            autoplay = '?autoplay=1';
        }

        // Не показывать вид «Похожие видео», когда видео заканчивается
        var related_no = '&rel=0';

        // Соедините переменные videoLink и param вместе
        var src = 'https://www.youtube.com/embed/' + videoLink + autoplay + related_no;

        // Установите источник в iframe
        parent.find('.youtube-video').attr('src', src);
    }


    // Клик по видео в header
    $('.header-video-start').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header-video-slider').addClass('active');
            // Активный слайд
            var activeSlide = $('.header-video-slider__item.slick-active');
            // Инициализируем активный слайд
            videoInit(activeSlide, true);
        }
    });

    // Клик по стрелке вперед
    $('.header-video-slider .slick-next').click(function() {
        // Активный слайд
        var activeSlide = $('.header-video-slider__item.slick-active');
        // Предыдущий слайд
        var prevSlide = activeSlide.prev();
        // Инициализируем активный и предыдущий слайд
        videoInit(activeSlide, true);
        videoInit(prevSlide);
    });

    // Клик по стрелке назад
    $('.header-video-slider .slick-prev').click(function() {
        // Активный слайд
        var activeSlide = $('.header-video-slider__item.slick-active');
        // Следующий слайд
        var nextSlide = activeSlide.next();
        // Инициализируем активный и Сследующий слайд
        videoInit(activeSlide, true);
        videoInit(nextSlide);
    });


    // При ресайзе окна браузера ресайзить слайдеры
    $(window).on('resize orientationchange', function() {
        $('.portfolio-slider').slick('resize');
        $('.reviews-slider').slick('resize');
        $('.price-box').slick('resize');
        $('.team-slider').slick('resize');
    });

    // Это нужно для того, чтобы на странице не было совпадений 'id' и 'for' в форме
    // Все модальные окна с классом 'modal-brief'
    var briefModals = $('.modal-brief');
    // Перебираем
    briefModals.each(function() {
        // Элементы формы input и label
        var formInputs = $(this).find('form input[id], label[for]');
        // Получаем id у модального окна
        var formDataId = $(this).attr('id');
        // Перебираем inputs и labels
        formInputs.each(function() {
            // Если это input
            if ($(this).is('input')) {
                // Получаем id
                var inpId = $(this).attr('id');
                // К id добавляем formDataId
                var correctId = formDataId + '_' + inpId;
                // Заменяем у input'a id на correctId
                $(this).attr('id', correctId);
                // 
                // Если это label
            } else if ($(this).is('label')) {
                // Получаем атрибут for
                var labelFor = $(this).attr('for');
                // К for добавляем formDataId
                var correctFor = formDataId + '_' + labelFor;
                // Заменяем у label'a for на correctFor
                $(this).attr('for', correctFor);
            }
        });
    });


    // Отправка формы
    $(".review-form").submit(function(event) {
        event.preventDefault();
        $('.review').removeClass('is-visible');
        $('.review-thanks').addClass('is-visible');
    })

    // Отправка формы
    $(".form-brief").submit(function(event) {
        event.preventDefault();
        $(this).trigger('reset');
        $(this).find('.file-select-name').text('');
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
        $(this).parent().parent().removeClass('is-visible');
        $('.modal-thanks').addClass('is-visible');
    })

    // Добавления аватара в review
    $('#image_input').on('change', function() {
        $input = $(this);
        if ($input.val().length > 0) {
            fileReader = new FileReader();
            fileReader.onload = function(data) {
                $('.image-preview').attr('src', data.target.result);
            }
            fileReader.readAsDataURL($input.prop('files')[0]);
            $('.image-button').css('display', 'none');
            $('.image-preview').css('display', 'block');
            $('.change-image').css('display', 'block');
        }
    });
    // Изменение аватара в review
    $('.change-image').on('click', function() {
        $control = $(this);
        $('#image_input').val('');
        $preview = $('.image-preview');
        $preview.attr('src', '');
        $preview.css('display', 'none');
        $control.css('display', 'none');
        $('.image-button').css('display', 'block');
    });

    // Добавить файл
    var fileInput = $('.file-upload-input');
    $('.file-upload-select').click(function() {
        var fileInput = $(this).parent().find('input[type="file"]');
        fileInput.click();
    });

    fileInput.change(function(event) {
        var filename = event.target.files[0].name;
        var selectName = $(this).next('.file-upload-select').find('.file-select-name');
        selectName.text(filename);
    });

    // Клик по кнопкам брифа
    $('.brief-btn').click(function(e) {
        e.preventDefault();
        $(this).addClass('active-modal');
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
        $(anchor).addClass('is-visible');
    });

    // Закрыть модальное окно и проскрооллить до нужного элемента
    function closeModal() {
        $('.modal.is-visible').removeClass('is-visible');
        $('html, body').stop().animate({
            scrollTop: $('.active-modal').offset().top - 500
        }, 1000);
        $('.active-modal').removeClass('active-modal');
    }

    // Close modal
    $('.modal-brief .modal-close, .modal-thanks .modal-close').click(function() {
        // Закрыть модальное окно
        closeModal();
    })

    // Если клик был вне модального окна
    $('.modal-brief, .modal-thanks').mouseup(function(e) {
        if ($('.modal').hasClass('is-visible')) {
            var modal = $('.modal.is-visible .modal-wrapper');
            if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                // Закрыть модальное окно
                closeModal();
            }
        }
    });

    // Видео в портфолио
    $(".video-link").click(function(e) {
        e.preventDefault();

        // Получите идентификатора видео из элемента, на который нажали
        var videoLink = $(this).attr('href');
        videoLink = videoLink.replace('https://www.youtube.com/watch?v=', '');

        // Автовоспроизведение при появлении модального окна
        var autoplay = '?autoplay=1';

        // Не показывать вид «Похожие видео», когда видео заканчивается
        var related_no = '&rel=0';

        // Соедините переменные videoLink и param вместе
        var src = 'https://www.youtube.com/embed/' + videoLink + autoplay + related_no;

        // Установите источник в iframe
        $("#youtube").attr('src', src);

        // Показываем модальное окно
        $(".video-modal").addClass("is-visible");

    });

    // Закрыть и сбросить модальное окно видео портфолио
    function closeVideoModal() {
        $('.video-modal.is-visible').removeClass('is-visible');
        $("#youtube").attr('src', '');
    }

    // Close video modal
    $('.video-modal .modal-close').click(function() {
        // Закрыть и сбросить модальное окно
        closeVideoModal();
    })

    // Если клик был вне модального окна
    $('.video-modal').mouseup(function(e) {
        if ($('.video-modal').hasClass('is-visible')) {
            var modal = $('.video-modal-content');
            if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                // Закрыть и сбросить модальное окно
                closeVideoModal();
            }
        }
    });

    // если нажать клавишу ESC
    $('body').keyup(function(e) {
        if (e.keyCode == 27) {
            if ($('.modal').hasClass('is-visible')) {
                var modal = $('.modal.is-visible .modal-wrapper');
                if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                    // Закрыть модальное окно
                    closeModal();
                }
            }
            if ($('.video-modal').hasClass('is-visible')) {
                // Закрыть и сбросить модальное окно
                closeVideoModal();
            }
        }
    });


});