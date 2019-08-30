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

this.open = function()
{
  this.state.open = true
  this.$roomModal.removeClass('modal-callback--hide')
  this.$roomModal.addClass('modal-callback--show')

}.bind(this)

this.close = function()
{
  this.state.open = false
  this.$roomModal.addClass('modal-callback--hide')
  this.$roomModal.removeClass('modal-callback--show')
}.bind(this)

this.openRoomModal = function (evt) {
  evt.preventDefault()
  if (this.state.open == false) {
    this.open()
    // this.$roomModal.addClass('modal-callback--show')
  } else {

  }
}.bind(this)

this.$container.on('click', '.card-room__button', function (evt) {
  this.openRoomModal(evt)
}.bind(this))

this.$container.on('click', '.card-room__link', function (evt) {
  this.openRoomModal(evt)
}.bind(this))

this.$buttonClose.click( function() {
  this.close()
}.bind(this))

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && this.state.open) {
    this.close()
  }
}.bind(this))
