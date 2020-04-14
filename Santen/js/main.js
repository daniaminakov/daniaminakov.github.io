// Клик по бургер-меню-START
function menuClick() {
    this.classList.toggle('menu-opened');
}
document.querySelector('.burger-menu').addEventListener('click', menuClick);
// Клик по бургер-меню-END