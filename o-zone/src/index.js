'use strict';

// чекбокс
function toggleCheckbox(){
// addEventListener - прослушивание элемента
// nextElementSibling - следуюший элемент
// classList (add, remove, toggle, contains) - добавляет,удаляет новые классы не трогая остальных 
// className - заменит полностью 

// 1.Когда у нас один чекбокс можно сделать вот так: 
// const checkbox = document.querySelector('#discount-checkbox');
// checkbox.addEventListener('change', function() {
// 	// this.nextElementSibling.classList.toggle('checked') - можно еще так, но не сильно надежно
// 	if (this.checked === true) {
// 		this.nextElementSibling.classList.add('checked');
// 	}else{
// 		this.nextElementSibling.classList.remove('checked');
// 	}
// });

// 2.Когда у нас много чекбоксов можно сделать вот так: 
// const checkbox = document.querySelectorAll('.filter-check_checkbox');
// for (let i = 0; i < checkbox.length; i++) {
// 	checkbox[i].addEventListener('change', function(){
// 		if (this.checked){
// 			this.nextElementSibling.classList.add('checked');
// 		}else{
// 			this.nextElementSibling.classList.remove('checked');
// 		}
// 	});
// }

// 3.Можно сделать вот так:
// forEach() - переберает все елементы
const checkbox = document.querySelectorAll('.filter-check_checkbox');
checkbox.forEach(function (elment) {
	elment.addEventListener('change', function(){
		if (this.checked){
			this.nextElementSibling.classList.add('checked');
		}else{
			this.nextElementSibling.classList.remove('checked');
		}
	})
});
}


// end чекбокс


// корзина
function toggleCart(){
	const bntCart = document.querySelector('#cart'),
	modalCart = document.querySelector('.cart'),
	btnClose = document.querySelector('.cart-close');

	bntCart.addEventListener('click', function(){
		modalCart.style.display = 'flex';
		document.body.style.overflow = 'hidden';
	});

	btnClose.addEventListener('click', function(){
		modalCart.style.display = 'none';
		document.body.style.overflow = '';
	});
}


// end корзина



// робота с товаром
function addCart(){
// cloneNode
// appendChild	
// textContent
// parseFloat()
const cards = document.querySelectorAll('.goods .card'),
cartWrapper = document.querySelector('.cart-wrapper'),
counter = document.querySelector('.counter'),
cartEmpty = document.querySelector('#cart-empty');

cards.forEach(function(card){
	const btn = card.querySelector('button');
	btn.addEventListener('click', function(){
		const cardClone = card.cloneNode(true);
		cartWrapper.appendChild(cardClone);
		showData();

		const removebtn = cardClone.querySelector('.btn');
		removebtn.textContent = 'Удалить из корзины';
		removebtn.addEventListener('click', function(){
			cardClone.remove();
			showData();
		});
		
	});
});

function showData(){
	const cardsCart = cartWrapper.querySelectorAll('.card'),
	cardsPrice = cartWrapper.querySelectorAll('.card-price'),
	cartTotal = document.querySelector('.cart-total span');
	counter.textContent = cardsCart.length;
	let sum = 0;
	cardsPrice.forEach(function(cardPrice){
		let price = parseFloat(cardPrice.textContent);
		sum += price;
	});
	cartTotal.textContent = sum;

	if(cardsCart.length !== 0){
		cartEmpty.style.display = 'none';
	}else{
		cartEmpty.style.display = 'block';
	}
}
}
// end робота с товаром


// фильтр акции
// parentNode
// RegExp - регулярное выражение
function actionPage(){
	const cards = document.querySelectorAll('.goods .card'),
	discountCheckbox = document.querySelector('#discount-checkbox'),
	min = document.querySelector('#min'),
	max = document.querySelector('#max'),
	search = document.querySelector('.search-wrapper_input'),
	searchBtn = document.querySelector('.search-btn');

// фильтр по акции
	discountCheckbox.addEventListener('click', function(){
		cards.forEach(function(card){
			if (discountCheckbox.checked) {
				if (!card.querySelector('.card-sale')) {
					card.parentNode.style.display = 'none';
				}
			}else{
				card.parentNode.style.display = '';
			}
		});
	});

// фильтр по цене
	min.addEventListener('change', filterPrice);
	max.addEventListener('change', filterPrice);

	function filterPrice(){
		cards.forEach(function(card){
			const cardsPrice = card.querySelector('.card-price');
			const price = parseFloat(cardsPrice.textContent);
			if((min.value && price < min.value) || (max.velue && price > max.value)){
				card.parentNode.style.display = 'none';
			}else{
				card.parentNode.style.display = '';
			}
		});
	};

// поиск
	searchBtn.addEventListener('click', function(){
		const searchText = new RegExp(search.value.trim(), 'i');
		cards.forEach(function(card){
			const title = card.querySelector('.card-title');
			if (!searchText.test(title.textContent)) {
				card.parentNode.style.display = 'none';
			}else{
				card.parentNode.style.display = '';
			}
		});
		search.value = '';
	});


};



// end фильтр акции

toggleCheckbox();
toggleCart();
addCart();
actionPage();
