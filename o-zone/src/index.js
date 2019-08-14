'use strict';

// чекбокс

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

// end чекбокс

// корзина
const bntCart = document.querySelector('#cart');
const modalCart = document.querySelector('.cart');
const btnClose = document.querySelector('.cart-close');

bntCart.addEventListener('click', function(){
	modalCart.style.display = 'flex';
	document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', function(){
	modalCart.style.display = 'none';
	document.body.style.overflow = '';
});


// end корзина


// робота с товаром

// cloneNode
// appendChild	
// textContent
const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper')
const counter = document.querySelector('.counter')

cards.forEach(function(card){
	const btn = card.querySelector('button');
	btn.addEventListener('click', function(){
		const cardClone = card.cloneNode(true);
		const cartEmpty = document.querySelector('#cart-empty');
		cartEmpty.style.display = 'none';
		cartWrapper.appendChild(cardClone);
		showData();
	});
});

function showData(){
	const cardsCart = cartWrapper.querySelectorAll('.card');
	counter.textContent = cardsCart.length;
}

// end робота с товаром