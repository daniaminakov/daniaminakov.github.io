// preloader-START
document.body.onload = function() {
    setTimeout(function() {
        let preloader = document.querySelector('#preloader');
        document.documentElement.style = ("overflow-y", "scroll");
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000)
};
// preloader-END


// scrollbar-START
let scrollbar = document.querySelector('.scrollbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    scrollbar.style.height = progressHeight + '%';
};
// scrollbar-END

// Main paralax letters-START
function windowSize() {
    if ($(window).width() >= '990') {
        function myParallax() {
            this.querySelectorAll(".parallax__item").forEach(layer => {
                let speed = layer.getAttribute("data-speed") * 0.01;
                let distanceX = event.clientX * speed;
                let distanceY = event.clientY * speed;
                layer.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
            });
        }
        document.addEventListener('mousemove', myParallax);
    }
};
windowSize();
// Main paralax letters-END


// Клик по бургер-меню-START
function menuClick() {
    this.classList.toggle('menu-opened');
    document.querySelector('.menu-wrapper').classList.toggle('menu-wrapper__active');
    document.body.classList.toggle('body__overflow-y');
}
document.querySelector('.burger-menu').addEventListener('click', menuClick);
// Клик по бургер-меню-END


// scrollup-START
$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
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


// Клики по навигации меню-START
$(".arrow-bottom").on("click", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({ scrollTop: top }, 1000);
});
// Клики по навигации меню-END


// Прогрес-скиллы-START
function progressSkills() {
    var progressBar = document.querySelectorAll(".progress-bar");
    var time = 2500;
    progressBar.forEach(function(i) {
        let label = i.children[1].children[0].children[0];
        let line = i.children[1];
        let count = 0;
        let dataCount = label.getAttribute("data-count");
        let lineCount = line.children[0];
        let runTime = time / dataCount;
        let animationLineCount = setInterval(function() {
            if (count < dataCount) {
                count++;
                label.innerHTML = count + '%';
                lineCount.style.width = count + '%';
            }
        }, runTime);
    });
    progressSkills = function() {};
};
// Прогрес-скиллы-END


// works-cards-START
let card = new Card('js-card');
card.run();

function Card(classCard) {
    this.cards = document.querySelectorAll('.' + classCard);
    this.bindEventsCard = function() {
        for (let i = 0, length = this.cards.length; i < length; i++) {
            this.cards[i].addEventListener('mousemove', this.startRotate);
            this.cards[i].addEventListener('mouseout', this.stopRotate);
        }
    }
    this.startRotate = function(event) {
        let cardItem = this.querySelector('.card-item'),
            halfHeight = cardItem.offsetHeight / 2,
            halfWidth = cardItem.offsetWidth / 2;
        cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 10 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 15 + 'deg)';
    }
    this.stopRotate = function(event) {
        let cardItem = this.querySelector('.card-item');
        cardItem.style.transform = 'rotate(0)';
    }
    this.run = () => {
        this.bindEventsCard();
    }
}
// works-cards-END