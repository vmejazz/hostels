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
    window.bodyScroll.resetScrollBody();
  }

  var closeModalRoom = function (evt) {
    modalRoom.classList.remove('rooms-order__modal--show');
    modalRoom.classList.add('rooms-order__modal--hide');
    window.bodyScroll.resetScrollBody();
  }


  var openModal = function (evt) {
    evt.preventDefault()
    modalCallback.classList.add('modal-callback--show');
    modalCallback.classList.remove('modal-callback--hide');
    window.bodyScroll.StopScrollBody();

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
      var parentSmallSrc = evt.target.parentNode.parentNode.parentNode.parentNode;
      var bbb = parentSmallSrc.querySelector('.room__big-jmg')
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
    var target = $( evt.target ).parents('.rooms-order__modal').attr('id')
    var buttonPush = evt.target;
    // this.$roomList = $(target).parents('.rooms-order__list')

  var roomList = $('.rooms-order__item div[id]')
    .map( function() {
      return this.id;
    })
    .get()



    var getNewTarget = function (oldTarget, list, buttonWay) {
      if (buttonWay.classList.contains('rooms-slider__button--back')) {
        if (list.indexOf(oldTarget) === 0) {
          return list.length - 1
        } else {
          return list.indexOf(oldTarget) - 1
        }
      } else {
        if (list.indexOf(oldTarget) === (list.length - 1)) {
          return 0;
        } else {
          return list.indexOf(oldTarget) + 1
        }
      }
    }

    var newIndexForModal = '#' + roomList[getNewTarget(target, roomList, buttonPush)]

    var newModal = $('.rooms-order__item').find(newIndexForModal);


    this.$modal = $('#' + target);
    this.$modal.removeClass('rooms-order__modal--show')
    this.$modal.addClass('rooms-order__modal--hide')
    newModal.removeClass('rooms-order__modal--hide')
    newModal.addClass('rooms-order__modal--show')


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

