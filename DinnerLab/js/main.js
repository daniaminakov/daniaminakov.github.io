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

	// Slider active
	$('.owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		smartSpeed: 700,
		dots: false,
		responsive:{
			0:{
				items:1
			}
		}
	})


	// Clock-START
	var futureDate  = new Date("Jan 17 2021 12:00:00");
	var currentDate = new Date();
	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	// Calculate day difference and apply class to .clock for extra digit styling.
	function dayDiff(first, second) {
		return (second-first)/(1000*60*60*24);
	}
	if(diff < 0) {
		diff = 0;
	}
	clock = $('.clock').FlipClock(diff, {
		countdown: true
	});
	// Clock-END


});