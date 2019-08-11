jQuery(function($){

	$('.bots').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('bots-active');
		$('.bots-block').toggleClass('bots-block-active');

		$(document).mouseup(function (e){ 
			const div = $('.bots');
			if (!div.is(e.target)&& div.has(e.target).length === 0) {
				$('.bots').removeClass('bots-active');
				$('.bots-block').removeClass('bots-block-active');
			}
		});
	});

	$('.support').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('support-active');
		$('.support-block').toggleClass('support-block-active');

		$(document).mouseup(function (e){ 
			const div = $('.support');
			if (!div.is(e.target)&& div.has(e.target).length === 0) {
				$('.support').removeClass('support-active');
				$('.support-block').removeClass('support-block-active')
			}
		});
	});



});



