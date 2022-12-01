 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.mySwiper', {
   // configure Swiper to use modules
   modules: [Navigation, Pagination],
  // Optional parameters
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  slideToClickedSlide: true,
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport:true,
  //   pageUpDown:true,
  // },
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 900,

  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate:20,
  //   stretch:20,
  //   slideShadows:true,
  // },

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


