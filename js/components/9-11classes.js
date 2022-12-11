const body = document.querySelector('body');

// Меню бургер ===============================================
const header = document.querySelector('.header'),
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
function listenerOnHeader() {
  header.addEventListener('click', (e) => {
    const target = e.target;

    if (target === menuBurger || target === menuBody) {
      e.preventDefault();
      showBurger();
    } else {
      hideBurger();
    }
  });
}
listenerOnHeader();