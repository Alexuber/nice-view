 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.mySwiper', {
   // configure Swiper to use modules
   modules: [Navigation, Pagination],
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

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
