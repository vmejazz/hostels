this.$container = $('.rooms-order');

this.state = {
  open: false
}

// *
// * Закрываем модальное окно
// *
this.close = function(target)
{
  this.state.open = false;
  target.classList.add('rooms-order__modal--hide')
  target.classList.remove('rooms-order__modal--show')
  window.bodyScroll.resetScrollBody();

  $(document).off('click', '.rooms-order__overlay', checkOverlayfield)

}.bind(this)

// *
// * Проверяем попадание клика на поле overlay
// *
var checkOverlayfield = function (evt) {
  if (evt.target.classList.contains('rooms-order__overlay')) {
    var modalOpened = $(evt.target).parents('.rooms-order__modal--show').get(0)
    this.close(modalOpened)
  }
  evt.stopPropagation();
}.bind(this);

// *
// * Открываем модальное окно
// *
this.open = function(target)
{
  this.state.open = true;
  target.classList.remove('rooms-order__modal--hide')
  target.classList.add('rooms-order__modal--show')
  window.bodyScroll.StopScrollBody();     //  останавливаем прокрутку основного сайта

  // *
  // * Обработчик клика по overlay
  // *
  $(document).on('click', '.rooms-order__overlay', checkOverlayfield)

}.bind(this)

// *
// * Обработчик клика кнопки Забронировать карточки
// *
this.$container.on('click', '.card-room__button', function (evt) {
  var itemCard = evt.target.parentNode.parentNode;
  var modalCard = itemCard.querySelector('.rooms-order__modal')
  // this.openRoomModal(evt, modalCard)
  this.open(modalCard)
}.bind(this))

// *
// * Обработчик клика кнопки Забронировать карточки
// *
this.$container.on('click', '.card-room__link', function (evt) {
  evt.preventDefault();
  var itemCard = evt.target.parentNode.parentNode.parentNode;
  var modalCard = itemCard.querySelector('.rooms-order__modal')
  // this.openRoomModal(evt, modalCard)
  this.open(modalCard)
}.bind(this))

// *
// * Обработчик клика кнопки закрыть, модального окна
// *
this.$container.on('click', '.rooms-modal__button--close', function (evt) {
  var itemCard = evt.target.parentNode.parentNode.parentNode;
  this.close(itemCard)
}.bind(this))

// *
// * Обработчик клика ESC при открытом модальном окне
// *
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && this.state.open) {
    var itemCard = document.querySelector('.rooms-order__modal--show');
    this.close(itemCard)
  }
}.bind(this))
