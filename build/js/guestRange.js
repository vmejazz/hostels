var $sumGuestInput = $('#input__guest');
var $adultGuestInput = $('#input__adult');
var $childrenGuestInput = $('#input__children');
var $sumGuestInputModal = $('#input__guest--modal')
var $adultGuestInputModal = $('#input__adult--modal')
var $childrenGuestInputModal = $('#input__children--modal')


var setCurrentGuest = function (sumGuestInput, adultInput, childrenInput) {
  var adult = parseInt(adultInput.val());
  var children = parseInt(childrenInput.val());
  sum = parseInt(adult + children);
  sumGuestInput.val(sum);
  // $sumGuestInputModal.val($sumGuestInput.val())
};

var openModalGuest = function (evt) {
  var currentFormGuest = $(evt.target).parents('.form-order')
  var modalGuest = currentFormGuest.find('.modal-guest')
  var currentSumGuest = currentFormGuest.find('.form-order__guest-all')
  var currentAdultGuest = currentFormGuest.find('.modal-guest__adult input')
  var currentChildrenGuest = currentFormGuest.find('.modal-guest__children input')


  if (evt.target.classList.contains('form-order__guest-button--plus')) {  // если  нажал на плюсик
    modalGuest.removeClass('modal-guest--hide')
    modalGuest.addClass('modal-guest--show')
    var guestCount = currentSumGuest.val();
    currentSumGuest.val(++guestCount);
  } else if (evt.target.classList.contains('form-order__guest-button--minus')) {
    var guestCount = currentSumGuest.val();
    if (guestCount > 1) {
      currentSumGuest.val(--guestCount);
      if (guestCount === 1) {
        modalGuest.removeClass('modal-guest--show')
        modalGuest.addClass('modal-guest--hide')
      }
    }
    else {
      modalGuest.removeClass('modal-guest--show')
      modalGuest.addClass('modal-guest--hide')

    }
  }

  currentAdultGuest.val(currentSumGuest.val());
};

var guestNumbers = function (evt) {
  var $currentFormGuest = $(evt.target).parents('.form-order')
  var currentSumGuest = $currentFormGuest.find('.form-order__guest-all')
  var currentAdultGuest = $currentFormGuest.find('.modal-guest__adult input')
  var currentChildrenGuest = $currentFormGuest.find('.modal-guest__children input')

  var $parentButtonInput = $(evt.target).parent()
  var childrenNode = evt.target.parentNode.classList.contains('modal-guest__children');
  var $inputField = $parentButtonInput.find('input');
  var guestCount = parseInt($inputField.val());
  if (evt.target.classList.contains('modal-guest__button--plus')) {
    $inputField.val(guestCount + 1);
  } else if (evt.target.classList.contains('modal-guest__button--minus')) {
      if (childrenNode) {
        if (guestCount > 0 ) {
          $inputField.val(guestCount - 1);
        }
      } else {
        if (guestCount > 1) {
          $inputField.val(guestCount - 1);
        }
      }

  }

  setCurrentGuest(currentSumGuest, currentAdultGuest, currentChildrenGuest);
};

var setAdultGuest = function (evt) {
  console.log(evt.target.val());
  console.log('sss');
};

$(window.document).ready(function() {
$('.form-order__guest-button').on('click', openModalGuest);

$('.form-order__guest-all').change(setAdultGuest);
$('.modal-guest__button').on('click', guestNumbers);
})



$('#input__check-in--style').datepicker({dateFormat: 'd MM yyyy', onSelect: function( formattedDate, date, inst ){
  $( inst.el ).trigger('change')
}})
$('#input__check-out--style').datepicker({dateFormat: 'd MM yyyy', onSelect: function( formattedDate, date, inst ){
  $( inst.el ).trigger('change')
}})
// $('#input__check-in--modal').datepicker({dateFormat: 'd MM yyyy'})
// $('#input__check-out--modal').datepicker({dateFormat: 'd MM yyyy'})
$(document).on('cardRendered', '.form-order__check-in--modal input', function () {
  console.log(rendered)
})


$('#minMaxExample').datepicker({
  // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
  minDate: new Date()
})
