// Меню бургер ===============================================
const body = document.querySelector('body'),
  // main = document.querySelector('main'),
  menuBurger = document.querySelector('.menu-icon'),
  menuBody = document.querySelector('.mobile-menu');

function showBurger() {
  menuBurger.classList.add('_active');
  body.classList.add('_block');
  if (menuBody) {
    menuBody.classList.add('_active');
  }
}
function hideBurger() {
  menuBurger.classList.remove('_active');
  body.classList.remove('_block');
  if (menuBody) {
    menuBody.classList.remove('_active');
  }
}

// Swiper-slider
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 400,
  spaceBetween: 50,
  grabCursor: true,
  slidesPerView: 3,
  centeredSlides: true,
  speed: 600,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Now you can use all slider methods like
swiper.slideNext();

window.addEventListener('click', (e) => {
  const target = e.target;
  // console.log(target);

  if (target === menuBurger || target === menuBody) {
    showBurger();
  } else {
    hideBurger();
  }
});

// Плавный скролл к якорю ===================================
// document.querySelectorAll('a[href^="#"').forEach(link => {

// 	link.addEventListener('click', function (e) {
// 		e.preventDefault();

// 		let href = this.getAttribute('href').substring(1);

// 		const scrollTarget = document.getElementById(href);

// 		// const topOffset = document.querySelector('.scrollto').offsetHeight;
// 		const topOffset = 80; // Отступ сверху 
// 		const elementPosition = scrollTarget.getBoundingClientRect().top;
// 		const offsetPosition = elementPosition - topOffset;

// 		window.scrollBy({
// 			top: offsetPosition,
// 			behavior: 'smooth'
// 		});
// 	});
// });

// Изменение порядков элементов DOM при определенной ширине экрана ================
// const headerBtn = document.querySelector('.header__btn');

// if (window.innerWidth <= 649) {
// 	menuBody.append(headerBtn)
// }

// Аккордеон ======================================================================
// const questions = document.querySelectorAll('.accordion');

// const closeQuestion = (el) => {
// 	const content = el.querySelector('.accordion__text');
// 	el.classList.remove('_active-acc');
// 	content.style.maxHeight = null;
// }

// const openQuestion = (el) => {
// 	const content = el.querySelector('.accordion__text');
// 	el.classList.add('_active-acc');
// 	content.style.maxHeight = content.scrollHeight + 'px';
// }

// const closeAllQuestions = () => questions.forEach(question => closeQuestion(question));

// questions.forEach((el) => {
// 	el.addEventListener('click', () => {
// 		if (el.classList.contains('_active-acc')) {
// 			closeQuestion(el);
// 		} else {
// 			closeAllQuestions();
// 			openQuestion(el);
// 		}
// 	});
// })

// Animation on scroll ============================================================
// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);

// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;

// 			if (animItemHeight > window.innerHeight) {
// 				let animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_show');
// 			} else {
// 				if (!animItem.classList.contains('_anim-no-hide')) {
// 					animItem.classList.remove('_show');
// 				}
// 			}
// 		}
// 	}

// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return {
// 			top: rect.top + scrollTop,
// 			left: rect.left + scrollLeft
// 		}
// 	}
// 	setTimeout(() => {
// 		animOnScroll();
// 	}, 500);
// }