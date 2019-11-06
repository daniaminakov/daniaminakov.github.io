
// Counter-START
var countDownDate = new Date("Nov 07, 2019 00:00:00").getTime();
var countDownFunction = setInterval(function(){
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	var before = "0";
	if (days < 10) {
		days = before + days;
	}
	if (hours < 10) {
		hours = before + hours;
	}
	if (minutes < 10) {
		minutes = before + minutes;
	}
	if (seconds < 10) {
		seconds = before + seconds;
	}
	
	document.querySelector(".days").innerHTML = days;
	document.querySelector(".hours").innerHTML = hours;
	document.querySelector(".minutes").innerHTML = minutes;
	document.querySelector(".seconds").innerHTML = seconds;
});
// Counter-END


// Modal-START

var modal = document.querySelector(".modal");
var close = document.querySelector(".modal-close");

// Open-modal

$(document).mouseleave(function(){
	modal.style.display = 'flex';
});


// Close-modal
close.addEventListener('click', function(){
	modal.style.display = 'none';
});

// Modal-END


// ModalVideo-START

var videoPlay = document.querySelector(".video-play");
var modalVideo = document.querySelector(".modal-video");
var closeVideo = document.querySelector(".video-close");

// Open-modalVideo
videoPlay.addEventListener('click', function(){
	modalVideo.style.display = 'flex';
});

// Close-modalVideo
closeVideo.addEventListener('click', function(){
	modalVideo.style.display = 'none';
	$(".modal-video__block iframe").each(function() {
		$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
});

// ModalVideo-END



$(window).resize (function () {
 $("iframe").each(function() {
 var width = $(this).width ();
 $(this).css("height", width / 1.7777 + "px");
 });
});
