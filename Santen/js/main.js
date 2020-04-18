jQuery(document).ready(function($) {

    // Клик по бургер-меню-START
    function menuClick() {
        this.classList.toggle('menu-opened');
    }
    document.querySelector('.burger-menu').addEventListener('click', menuClick);
    // Клик по бургер-меню-END

    // Слайдер
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        infinite: true,
        speed: 300
    });

});