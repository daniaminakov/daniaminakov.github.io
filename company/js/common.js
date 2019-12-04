$(document).ready(function() {
    $("[name='phone']").mask("+7 999 - 999 - 99 - 99");

    $('.tooltip-icon').click(function () {
        // $('.tooltip-text').fadeOut();
        // $('.tooltip-icon').removeClass('click');
        $(this).toggleClass('click').find('.tooltip-text').fadeToggle();
    });

    $('.reviews-slider').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });


    $('.photo-slider__max').owlCarousel({
     items: 1,
     nav: true,
     loop: true,
     dots: false
 });

    $('.icon-phone').click(function () {
        $('.phone-hidden').fadeToggle();
    });

    $('.btn-burger').click(function () {
        $('.nav').toggleClass('open');
        $('.close-menu').toggleClass('close-menu_open');
    });


// swipe
$('body').swipe({
    swipe:function(event, direction) {
      if( direction == 'left' ){
        $('.nav').removeClass('open');
        $('.close-menu').removeClass('close-menu_open');
    }
    if( direction == 'right' ){
        $('.nav').addClass('open');
        $('.close-menu').addClass('close-menu_open');
    }
}
});

// close-open

$('.close-menu').on('click', function(){
    $('.nav').removeClass('open');
    $(this).removeClass('close-menu_open');
});


    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .overlay');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
                });
        });

        close.click(function () {
            modal
            .animate({
                opacity: 0,
                top: '45%'
            }, 200,
            function () {
                $(this).css('display', 'none');
                overlay.fadeOut(400);
            }
            );
        });
    });
//end

var penImg = $('.photo-slider__max img');

$('.photo-min').on('click', function () {
    var imgPath;

    imgPath = $(this).attr('data-img-path');

    penImg.attr('src', imgPath);

});

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});
});
