const body = document.body,
      burger = document.querySelector('.header__menu'),
      navLinks = document.querySelectorAll('.menu-nav__item a'),
      menu = document.querySelector('.menu'),
      html = document.documentElement,
      menuList = document.querySelector('.menu__list'),
      tabBtns = document.querySelectorAll('.live__selects-item'),
      tabContents = document.querySelectorAll('.live__video-container'),
      header = document.querySelector('.header'),
      categoriesBlock = document.querySelector('.categories'),
      searchBarInput = document.querySelector('.search-bar__block input'),
      searchBarResults = document.querySelector('.search-bar__results');
      const searchBarBlock = document.querySelector('.search-bar__block');
      const searchBarResultsList = searchBarResults.querySelector('ul');

if (categoriesBlock) {

  searchBarInput.addEventListener('input', () => {
    searchBarBlock.classList.add('search-bar__block--active')

    if (searchBarBlock.classList.contains('search-bar__block--active')) {
      searchBarResults.classList.add('search-bar__results--active')

      console.log(searchBarInput.value);
    }
    if (searchBarInput.value.length === 0) {
      searchBarBlock.classList.remove('search-bar__block--active');
      searchBarResults.classList.remove('search-bar__results--active')
    }

  })

  categoriesBlock.addEventListener('click', (e) => {
    if (e.target === categoriesBlock || e.target === document.querySelector('.categories__body')) {
      searchBarBlock.classList.remove('search-bar__block--active');
      searchBarResults.classList.remove('search-bar__results--active')
    }
  })
}


function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}

closeMenuByClick();

function showMenu() {
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')

  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
    html.classList.add('body-locked')

    setTimeout(() => menuList.classList.add('active-list'), 300);

  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');

    menuList.classList.remove('active-list');
  }
}

function closeMenu() {
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked')
  html.classList.remove('body-locked');

  menuList.classList.remove('active-list');
}


if (burger) {
  burger.addEventListener('click', showMenu);
}

const videoPreloader = document.querySelector('.navigation__video-preloader'),
      videoPlayBtn = document.querySelector('.navigation__play-btn'),
      videoContainer = document.querySelector('.navigation__video-container'),
      videoBlock = document.querySelector('.navigation__video-container video');

if (videoPreloader) {
  let delay = 550;
  let styleHidePlayBtn = 'translate(-50%, -50%) scale(0)';

  videoPlayBtn.addEventListener('click', () => {
    videoPlayBtn.classList.toggle('video-showed');

    const condition = videoPlayBtn.classList.contains('video-showed');

    videoBlock.pause();

    if (condition) {
      videoPreloader.classList.add('hide-preloader');

      setTimeout(() => videoBlock.play(), delay);

      setTimeout(() => {
        videoContainer.classList.add('show-video');
      }, 0);

      setTimeout(() => videoPlayBtn.style.transform = styleHidePlayBtn, delay);
    }
  })
}

if (Swiper) {
  const homeSlider = new Swiper('.slider__body', {
    spaceBetween: 20,
    speed: 1000,

    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true
    // },

    navigation: {
      nextEl: '.slider__arrow--next',
      prevEl: '.slider__arrow--prev'
    },
    parallax: true,
    pagination: {
      el: '.slider__pagination'
    }
  })
}

if (tabBtns) {
  tabBtns.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabBtns.forEach(tab => {tab.classList.remove('live__selects-item--active')});

      tab.classList.add('live__selects-item--active');

      tabContents.forEach(content => {content.classList.remove('live__video-container--active')});
      tabContents[index].classList.add('live__video-container--active')
    })
  })
}

