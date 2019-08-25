var mySwiper = new Swiper ('.main-customers__slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.main-customers__button--next',
    prevEl: '.main-customers__button--back',
  },

  slidesPerView: 5
})


var mySwiper = new Swiper ('.main-review__slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  // wrapperClass: '.main-review__swiper-wrapper',
  // setWrapperSize: true,

  // Navigation arrows
  navigation: {
    nextEl: '.main-review__button--next',
    prevEl: '.main-review__button--back',
  },

  slidesPerView: 3
})
