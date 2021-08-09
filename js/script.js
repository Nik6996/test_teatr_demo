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

	if (headerY.top <= -55) {
		headerBody.classList.add('active');
	};
	if (headerY.top >= 0) {
		headerBody.classList.remove('active');
	};
})

//============================SLIDER=============================


new Swiper('.slider-content__body', {

	slidesPerView: 4,
	loop: true,

});



new Swiper('.partner__body', {

	breakpoints: {
		500: {
			slidesPerView: 2,
		},
		700: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
	},


	loop: true,

});




// if (document.documentElement.clientWidth <= 1920) {
// 	let swipeContainer = document.querySelector('.slider-content');

// 	swipeContainer.addEventListener('touchstart', touchStart, false);
// 	swipeContainer.addEventListener('touchmove', touchMove, false);

// 	let x1 = null;
// 	let y1 = null;

// 	function touchStart(event) {
// 		const firstTouch = event.touches[0];
// 		x1 = firstTouch.clientX;
// 		y1 = firstTouch.clientY;
// 		rollSlider();
// 	}
// 	function touchMove(event) {
// 		if (!x1 || !y1) {
// 			return false;
// 		}
// 		let x2 = event.touches[0].clientX;
// 		let xDiff = x2 - x1;
// 		if (xDiff < 0) {
// 			count++;
// 			rollSlider();

// 		}
// 		if (xDiff > 0) {
// 			count--;
// 			rollSlider();
// 			if (count <= 0) {
// 				count = sumSlide
// 			}
// 		}
// 		if (count > sumSlide - 2) {
// 			count = -1;
// 		}
// 		console.log(count);

// 		x1 = null;
// 		y1 = null;
// 	}


// 	const slide = document.querySelectorAll('cart-slider');
// 	const sliderLine = document.querySelector('.content-slider__slider-line');
// 	let count = 0;
// 	let width;
// 	let sumSlide = document.getElementsByClassName('cart-slider').length;
// 	console.log(sumSlide);

// 	function init() {
// 		width = document.querySelector('.cart-slider').offsetWidth;
// 		sliderLine.style.width = width * slide.length + 'px';

// 	}
// 	window.addEventListener('resize', init);


// 	function rollSlider() {
// 		sliderLine.style.transform = 'translate(-' + count * width + 'px) ';
// 		window.addEventListener('resize', init);
// 		init();
// 	}

// }