var mySwiper = new Swiper ('.main-customers__slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.main-customers__button--next',
    prevEl: '.main-customers__button--back',
  },

  slidesPerView: 1,
  spaceBetween: 10,

  breakpointsInverse: true,
  breakpoints: {
    // when window width is >= 320px
    720: {
      slidesPerView: 5,
      spaceBetween: 0
    }
  }
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

  slidesPerView: 3,

  breakpoints: {
    // when window width is <= 320px
    720: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
})


//mobile-menu
$(document).ready(function() {
  this.$menuButton = $('.page-header__navigation-button');
  this.$menuNavigation = $('.main-navigation')
  this.$menuButton.addClass('page-header__navigation-button--close')
  this.$menuButton.removeClass('page-header__navigation-button--open')

  this.toggleMenu = function (e) {
    this.$menuNavigation.toggleClass('main-navigation--show')
    this.$menuNavigation.toggleClass('main-navigation--hide')
    this.$menuButton.toggleClass('page-header__navigation-button--open')
    this.$menuButton.toggleClass('page-header__navigation-button--close')
  }

  this.$menuButton.on('click', function() {
    this.toggleMenu()
  }.bind(this))
})
