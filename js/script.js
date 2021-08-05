//================================================================

let btnOpen = document.querySelector('.header__burger');
let btnClose = document.querySelector('.menu-header__btn');
let burgerMenu = document.querySelector('.menu-header');
let body = document.querySelector('body');
btnOpen.addEventListener('click', function () {
	burgerMenu.classList.add('active');
	body.classList.add('lock');
});

btnClose.addEventListener('click', function () {
	burgerMenu.classList.remove('active');
	body.classList.remove('lock');
})

//=================================================================================================

let headerBody = document.querySelector('.header');
let title = document.querySelector('.title');



window.addEventListener('scroll', function () {
	let headerY = title.getBoundingClientRect();
	console.log(headerY.top)
	if (headerY.top <= -55) {
		headerBody.classList.add('active');
	};
	if (headerY.top >= 0) {
		headerBody.classList.remove('active');
	};
})

