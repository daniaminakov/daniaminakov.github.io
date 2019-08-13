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


	$('#click_more').on('click', function(e){
		e.preventDefault;
		$('.solution-more').toggleClass('solution-active');
		const solHeight = $('.solution-more').height();

		if (solHeight < 800) {
			$('#click_more').text('Close');
		}

		else if((solHeight > 800)){
			$('#click_more').text('See more');
		}

	});

});



