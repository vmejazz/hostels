var $mainForm = $('.margin-order__form');
var $scrollButton = $('.main-order__scroll')
var $helpPopupFirst = $mainForm.find('.help-popup')
var $helpPopupSecond = $scrollButton.find('.help-popup')

var openPopup =  function (target)
{
  setTimeout( function (e) {
    target.addClass('help-popup--show')
    target.removeClass('help-popup--hide')
  }, 300)
}

var closePopup = function(target)
{
  setTimeout( function () {

    target.removeClass('help-popup--show')
    target.addClass('help-popup--hide')
  }, 300)
}

var showPopup = function () {
  $mainForm.hover( function () {
    openPopup($mainForm.find('.help-popup'))
  }, function () {
    console.log($mainForm.find('.help-popup'))
    closePopup($mainForm.find('.help-popup'))
  })

  $scrollButton.hover( function () {
    openPopup($scrollButton.find('.help-popup'))
  }, function () {
    closePopup($scrollButton.find('.help-popup'))
  })
}

showPopup()
