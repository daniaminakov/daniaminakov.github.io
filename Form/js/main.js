const 	addButton = document.querySelector('#btn-add'),
		deleteButton = document.querySelector("#btn-delete"),
		  companyAll = document.querySelectorAll('.company-block__item input'),
			  company = document.querySelector('.company-block__main')
	companySelected = document.querySelector('.company-block__selected'),
companySelectedAll = document.querySelectorAll('.company-block__item input');

// Клик на кнопку добавить
addButton.addEventListener('click', () =>{
	companyAll.forEach(function(item) {
		if (item.checked){
			companySelected.append(item.parentNode);
			item.checked = false;
		}
	});
});

// Клик на кнопку удалить
deleteButton.addEventListener('click', () =>{
	companySelectedAll.forEach(function(i) {
		if (i.checked){
			company.append(i.parentNode);
			i.checked = false;
		}
	});
});

