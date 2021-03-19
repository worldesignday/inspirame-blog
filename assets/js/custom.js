const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 576px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    },
    // when window width is >= 768px
    567: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },

  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },
});
