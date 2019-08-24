var $sumGuestInput = $('#input__guest');
var $adultGuestInput = $('#input__adult');
var $childrenGuestInput = $('#input__children');

var currentGuestSet = function () {
  var adult = parseInt($adultGuestInput.val());
  var children = parseInt($childrenGuestInput.val());
  sum = parseInt(adult + children);
  $sumGuestInput.val(sum);
  console.log(sum, adult, children);
};

var openModalGuest = function (evt) {

  if (evt.target.classList.contains('form-order__guest-button--plus')) {
    $('.form-order__modal').removeClass('modal-guest--hide')
    $('.form-order__modal').addClass('modal-guest--show')
    var guestCount = $('#input__guest').val();
    $('#input__guest').val(++guestCount);
  } else if (evt.target.classList.contains('form-order__guest-button--minus')) {
    var guestCount = $('#input__guest').val();
    if (guestCount > 1) {
      $('#input__guest').val(--guestCount);
    }
    else {
      $('.form-order__modal').removeClass('modal-guest--show')
      $('.form-order__modal').addClass('modal-guest--hide')

    }
  }

  $('#input__adult').val($('#input__guest').val());
  // if (evt.target.indexOf(form-order__guest-button--plus))
};

var guestNumbers = function (evt) {
  var $parentButtonField = evt.target.parentNode;
  var inputField = $parentButtonField.querySelector('input');
  console.log(inputField);
  if (evt.target.classList.contains('modal-guest__button--plus')) {
    var guestCount = +inputField.value;
    inputField.value = guestCount + 1;
  } else if (evt.target.classList.contains('modal-guest__button--minus')) {
    var guestCount = +inputField.value;
    if (guestCount > 0 ) {
      inputField.value = guestCount - 1;
    }
  }

  currentGuestSet();
};

var setAdultGuest = function (evt) {
  console.log(evt.target.val());
  console.log('sss');
};

$(window.document).ready(function() {
$('.form-order__guest-button').on('click', openModalGuest);
$('.form-order__guest-all').change(function(){alert('vbba')});

$('.form-order__guest-all').change(setAdultGuest);
$('.modal-guest__button').on('click', guestNumbers);
})



$('#input__check-in--style').datepicker({dateFormat: 'd MM yyyy'})
$('#input__check-out--style').datepicker({dateFormat: 'd MM yyyy'})


$('#minMaxExample').datepicker({
  // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
  minDate: new Date()
})
