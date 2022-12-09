// Меню бургер ===============================================
const body = document.querySelector('body'),
  // main = document.querySelector('main'),
  header = document.querySelector('.header'),
  menuBurger = document.querySelector('.menu-icon'),
  menuBody = document.querySelector('.mobile-menu'),
  infoInner = document.querySelector('.info__inner'),
  infoItems = document.querySelectorAll('.info__item');

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

function closeAllAccordion(arr, selector) {
  arr.forEach((item) => {
    item.classList.remove(selector);
    // if (item === target) {
    //   item.classList.add(selector);
    // }
  });
}

function toggleTargetAccordion(item, selector) {
  item.classList.toggle(selector);
}

// Swiper-slider
// const swiper = new Swiper('.swiper', {
//   // loop: true,
//   speed: 450,
//   spaceBetween: 100,
//   grabCursor: true,
//   slidesPerView: 3,
//   centeredSlides: true,
//   nested: true,
//   breakpoints: {
//     767: {
//       slidesPerView: 1,
//       spaceBetween: 30
//     }
//   },
//   // loop: true,
//   // centered: 'auto',


//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
// swiper.slideNext();


header.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (target === menuBurger || target === menuBody) {
    showBurger();
  } else {
    hideBurger();
  }
});

// closeAllAccordion(infoItems, '_active-item-info');
infoInner.addEventListener('click', (e) => {
  const target = e.target,
    parentItem = target.parentElement.parentElement,
    preParentItem = target.parentElement.parentElement.parentElement;

  if (target.classList.contains('item-info__header')) {
    closeAllAccordion(infoItems, '_active-item-info');
    toggleTargetAccordion(parentItem, '_active-item-info');
  } else if (target.classList.contains('item-info__title') || target.classList.contains('item-info__btn')) {
    closeAllAccordion(infoItems, '_active-item-info');
    toggleTargetAccordion(preParentItem, '_active-item-info');
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