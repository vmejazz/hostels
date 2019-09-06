this.$container = $('.rooms-order');
this.$openButton = '.card-room__button'
this.$roomModal = this.$container.find('.rooms-order__modal')
this.$buttonClose = this.$container.find('.rooms-modal__button--close')

this.state = {
  open: false,
  options: [
    {
      Id: 1,
      address: '',
      features: [
        {
          wifi: true,
          shampoo: true,
          parking: false
        }
      ]
    }
  ]


}

this.open = function(target)
{
  this.state.open = true;
  // this.$roomModal.removeClass('modal-callback--hide')
  // this.$roomModal.addClass('modal-callback--show')
  target.classList.remove('rooms-order__modal--hide')
  target.classList.add('rooms-order__modal--show')
  window.bodyScroll.StopScrollBody();

  var modalOpened = $(document).find('.rooms-order__modal--show')
  $(document).on('click', '.rooms-order__overlay', function () {
    this.state.open = false;
    modalOpened.addClass('rooms-order__modal--hide')
    modalOpened.removeClass('rooms-order__modal--show')
    window.bodyScroll.resetScrollBody();
  }.bind(this)).on('click', 'div', function (e) {
    e.stopPropagation();
  })


}.bind(this)

this.close = function(target)
{
  this.state.open = false;
  target.classList.add('rooms-order__modal--hide')
  target.classList.remove('rooms-order__modal--show')
  window.bodyScroll.resetScrollBody();

}.bind(this)

this.openRoomModal = function (evt, card) {
  evt.preventDefault()
  if (this.state.open == false) {
    this.open(card)
    // this.$roomModal.addClass('modal-callback--show')
  } else {

  }
}.bind(this)

this.$container.on('click', '.card-room__button', function (evt) {
  var itemCard = evt.target.parentNode.parentNode;
  var modalCard = itemCard.querySelector('.rooms-order__modal')
  this.openRoomModal(evt, modalCard)
}.bind(this))

this.$container.on('click', '.card-room__link', function (evt) {
  var itemCard = evt.target.parentNode.parentNode.parentNode;
  var modalCard = itemCard.querySelector('.rooms-order__modal')
  this.openRoomModal(evt, modalCard)
}.bind(this))

// this.$buttonClose.click( function() {
//   this.close()
// }.bind(this))

this.$container.on('click', '.rooms-modal__button--close', function (evt) {
  var itemCard = evt.target.parentNode.parentNode.parentNode;
  this.close(itemCard)
}.bind(this))

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && this.state.open) {
    var itemCard = document.querySelector('.rooms-order__modal--show');
    this.close(itemCard)
  }
}.bind(this))
