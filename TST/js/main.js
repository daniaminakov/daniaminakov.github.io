'use strict';



// modal-start

const	modalWindow = document.querySelector('.modal');

function funModal(){
	const modalOpen = document.querySelector('.personal-area__text');
	modalOpen.addEventListener('click', function(){
		const	modalWindow = document.querySelector('.modal');
		modalWindow.style.display = 'block';

		window.addEventListener('click', function(event){
			let modal = document.querySelector('.modal')
			if(event.target == modal){
				modalWindow.style.display = 'none';
			}
		});
	});
}

function funClose(){
	const modalClose = document.querySelector('.modal-close');
	modalClose.addEventListener('click', function(){
		const	modalWindow = document.querySelector('.modal').style.display = 'none';
	});
}

funModal();
funClose();

// modal-end