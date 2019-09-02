(function () {
  var modalCallback = document.querySelector('.modal-callback');
  var modalOverlay = document.querySelector('.modal-callback__overlay');
  var mainPromotionButton = document.querySelector('.main-promotion__button');
  var modalCallbackCloseButton = modalCallback.querySelector('.modal-callback__button--close');
  var modalRoom = document.querySelector('.rooms-order__modal');
  var roomModalClose = modalRoom.querySelector('.rooms-modal__button--close');

  var modalCallbackOpenButton = document.querySelector('.callback__button');

  var closeModal = function (evt) {
    modalCallback.classList.remove('modal-callback--show');
    modalCallback.classList.add('modal-callback--hide');
  }

  var closeModalRoom = function (evt) {
    modalRoom.classList.remove('rooms-order__modal--show');
    modalRoom.classList.add('rooms-order__modal--hide');
  }


  var openModal = function (evt) {
    evt.preventDefault()
    modalCallback.classList.add('modal-callback--show');
    modalCallback.classList.remove('modal-callback--hide');
    document.addEventListener('keydown', function(evt){
      if (evt.keyCode === 27) {
        closeModal();
      }
    })
    // document.addEventListener('click', function (evt){
    //   if (evt.target.contain('.modal-callback__overlay')) {
    //     console.log('Popal v overlay')
    //   }
    // });
  };



  modalCallbackOpenButton.addEventListener('click', openModal);
  modalCallbackCloseButton.addEventListener('click', closeModal);
  mainPromotionButton.addEventListener('click',openModal);
  roomModalClose.addEventListener('click', closeModalRoom);


  document.addEventListener('keydown', function(evt){
    // console.log(evt.keyCode);
  })
  })();

//  Активность смены маленьких превью на большое

var changeSmallPhotoToBig = function () {
  $(document).ready(function() {
    this.$container = $('.room__photos')
    this.$bigPhoto = this.$container.find('.room__big-jmg')

    this.changePhotoSrc = function (evt) {
      console.log(evt.target.src)
      var parentSmallSrc = evt.target.parentNode.parentNode.parentNode.parentNode;
      console.log(parentSmallSrc)
      var bbb = parentSmallSrc.querySelector('.room__big-jmg')
      console.log(bbb);
      bbb.src = evt.target.src
    }

    this.$container.on('click', '.room__photo-link', function (evt) {
      evt.preventDefault()

      this.changePhotoSrc(evt)
    }.bind(this))
  })
}

//    Оживляем модальный слайдер

var setHandlerOnSliderButtons = function () {
  var orderList = $('.rooms-order__list');

  orderList.on('click', '.rooms-slider__button', function (evt) {
    var target = $( event.target ).parents('.rooms-order__modal').attr('id')
    console.log(target)
    // this.$roomList = $(target).parents('.rooms-order__list')

  this.$roomList = $('.rooms-order__item')
  this.$newOpenModal = this.$roomList.find('.rooms-order__modal')
  console.log(this.$newOpenModal)
  var arrayRooms = [];
  this.$newOpenModal.map(function (elem) {
    arrayRooms.push (elem.div)
  })
  console.log(arrayRooms)

    // console.log(target)

    // this.$modal = $(target).find('.rooms-order__modal');
    // this.$modal.removeClass('rooms-order__modal--show')
    // this.$modal.addClass('rooms-order__modal--hide')
    // var roomListID = [];
    // this.$roomList.find('room-order__item').map(function (elem) {
    //   console.log(elem)
    // })
    // this.$roomModal = this.$roomList.find('rooms-order__modal')

  })
}



window.modal = {
  'changeSmallPhotoToBig': changeSmallPhotoToBig,
  'setHandlerOnSliderButtons': setHandlerOnSliderButtons
}

