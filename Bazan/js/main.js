// menu
subMenu();

function subMenu(){
	const menu = document.querySelector('.inner-submenu');
	menu.addEventListener('click', function(){
		menu.classList.toggle('inner-submenu_active');
	});
};


// menu-end