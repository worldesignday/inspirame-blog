var swiper = new Swiper('.swiper-container', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 576px
    0: {
      slidesPerView: 'auto',
      spaceBetween: 20
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


//swiper entradas
var swiper = new Swiper('.swiper-container2', {
  // Optional parameters
  slidesPerView: 3,
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
      slidesPerView: 3,
      spaceBetween: 30
    },
  },

});