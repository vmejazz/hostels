var $mainForm = $('.margin-order__form');
var $scrollButton = $('.main-order__scroll')
var $helpPopupFirst = $mainForm.find('.help-popup')
var $helpPopupSecond = $scrollButton.find('.help-popup')



var showPopup = function (time = 3000) {
  setTimeout ( function () {
    $helpPopupFirst.addClass('help-popup--show')
  }, time)

  setTimeout ( function () {
    $helpPopupSecond.addClass('help-popup--show')
  }, time*2)
}

$(document).ready(function() {
  width = $(window).width();
  if (width >= 720) {
    $(window).one( 'scroll', function(){
      showPopup(300)
    })
  }
})



//  Старая версия, при наведении
// -  - - - - - -

// var openPopup =  function (target)
// {
//   setTimeout( function (e) {
//     target.addClass('help-popup--show')
//     target.removeClass('help-popup--hide')
//   }, 3000)
// }

// var closePopup = function(target)
// {
  // setTimeout( function () {

  //   target.removeClass('help-popup--show')
  //   target.addClass('help-popup--hide')
  // }, 100)
// }

// var showPopup = function () {
//   $mainForm.hover( function () {
//     openPopup($mainForm.find('.help-popup'))
//   }, function () {
//     closePopup($mainForm.find('.help-popup'))
//   })

//   $scrollButton.hover( function () {
//     openPopup($scrollButton.find('.help-popup'))
//   }, function () {
//     closePopup($scrollButton.find('.help-popup'))
//   })
// }

// showPopup()
//  - - - - - -
