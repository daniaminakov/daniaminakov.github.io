
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
var play = document.querySelector(".video-play");
var close = document.querySelector(".modal-close");
// Open-modal
play.addEventListener('click', function(){
	modal.style.display = 'flex';
});
// Close-modal
close.addEventListener('click', function(){
	modal.style.display = 'none';
});

// Modal-END



