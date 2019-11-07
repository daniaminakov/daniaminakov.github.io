
// Counter-START
var countDownDate = new Date("Feb 07, 2020 00:00:00").getTime();
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

	if(countDownDate < now){
		days = 0 + before;
		hours = 0 + before;
		minutes = 0 + before;
		seconds = 0 + before;
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
	modal.style.display = 'flex';
	jQuery(".modal-video__block iframe").each(function() {
		jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
});


// ModalVideo-END
