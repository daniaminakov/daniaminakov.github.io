$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});


// Open modal window
$(window).on('load',function(){
	setTimeout(function(){
		$('#modal').fadeIn()
	},10000)
})
// Open modal window.



// Clsoe modal window
$('#close').click(function(){
	$('#modal').css('display','none')
});
// Clsoe modal window.

});