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
    console.log(evt.keyCode);
  })
  })();

