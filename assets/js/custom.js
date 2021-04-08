var swiper = new Swiper('.swiper-container-hero', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },
});
var swiper = new Swiper('.swiper-container', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
var swiper = new Swiper('.swiper-container-entradas', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 576px
    0: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },
    // when window width is >= 768px
    567: {
      slidesPerView: 3,
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

// before - after
 new BeerSlider( document.getElementById( "slider" ), { start: 25 } );


// Tagged (taggin imagenes)
var image = document.getElementById('example-basic');

var options = {};
var data = [
  Taggd.Tag.createFromObject({
    position: { x: 0.19, y: 0.4 },
    text: '<span>REF 903261511</span><br>CONCOLOR® Max Gris Claro',
  }),
  Taggd.Tag.createFromObject({
    position: { x: 0.5, y: 0.3 },
    text: '<span>REF 903261511</span><br>Pintura Lavable Blanco',
  }),
  Taggd.Tag.createFromObject({
    position: { x: 0.775, y: 0.5 },
    text: '<span>REF 903261511</span><br>PEGACOR® Cerámico Gris',
  }),
];

var taggd = new Taggd(image, options, data);


