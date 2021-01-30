$( document ).ready(function() {

	// scrollup-START
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1500) {
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

	// Клик по бургер-меню-START
	function menuClick() {
		this.classList.toggle('menu-opened');
		document.querySelector('.menu-navigation').classList.toggle('menu-active');
	}
	document.querySelector('.burger-menu').addEventListener('click', menuClick);
	// Клик по бургер-меню-END

});