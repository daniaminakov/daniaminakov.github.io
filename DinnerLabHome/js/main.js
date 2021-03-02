$( document ).ready(function() {

	function menuClick() {
		this.classList.toggle('menu-opened');
		document.querySelector('.menu-mobile').classList.toggle('active');
	}
	document.querySelector('.burger-menu').addEventListener('click', menuClick);

	// Активное меню - START
	const section = $('.section'),
	nav = $('.active-menu'),
		navHeight = nav.outerHeight(); // получаем высоту навигации

		$(window).on('scroll', function () {
			const position = $(this).scrollTop();

			section.each(function () {
				const top = $(this).offset().top - navHeight - 5,
				bottom = top + $(this).outerHeight();

				if (position >= top && position <= bottom) {
					nav.find('a').removeClass('active');
					section.removeClass('active');

					$(this).addClass('active');
					nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
				}
			});
		});

		nav.find('a').on('click', function () {
			const id = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(id).offset().top
			}, 487);

			return false;
		});
		// Активное меню - END


	// Tabs - START

	function fadeTabs(){
		setTimeout(function(){
			$('.tab_item').css("display", "none");
			$('.tab_item:first-child').css("display", "block");
		}, 1);
	}
	fadeTabs();
	
	$(".tabs-wrapper .tab").click(function() {
		$(".tabs-wrapper .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("tab-active");
	// Tabs - END


	// Slider
	$('.product-slider').owlCarousel({
		loop:false,
		nav:true,
		margin:35,
		dots: false,
		responsive:{
			0:{
				items: 1
			},
			1050:{
				items: 2
			}
		}
	})

	// Slider
	$('.reviews-slider').owlCarousel({
		
		loop:true,
		nav:true,
		dots: false,
		responsive:{
			0:{
				items: 1
			},
			1220:{
				center: true,
				items: 2
			},
			1440:{
				center: true,
				items: 3
			}	
		}
	})


});