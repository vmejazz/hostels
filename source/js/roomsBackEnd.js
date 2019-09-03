(function () {
  this.$container = $('#rooms-order')
  var orderList = document.querySelector('.rooms-order__list');
  var roomsFromBackEnd = [];
  var smallPhotoTemplate = document.querySelector('#small-photo__template')
  .content
  .querySelector('.room__small-photo');
  var mapCardTemplate = document.querySelector('#card-room__template')
  .content
  .querySelector('.rooms-order__item');

  console.log(mapCardTemplate);

  var resetListRooms = function () {
    orderList.innerHTML = '';
  }
  // this.renderCards = function (e) {
  //   var r = ''

  //   window.roomsBackEnd.fromBack.map( function (elem) {



  //   })
  // }

  // this.checkSaleState = function (elem) {
  //   if (elem.sale_price = ) {

  //   }
  // }

  // this.smallPhotoRoom = function (imgArray, cardElement) {
  //   console.log(imgArray)
  //   var smallPhotoField = cardElement.querySelectorAll('.small-room-photo');
  //   Array.from(smallPhotoField)
  //   imgArray.map( function (elem) {

  //   })
  // }

  var setPhotoSrc = function ( imageSrc) {
    var smallPhotoElement = smallPhotoTemplate.cloneNode(true);

    smallPhotoElement.querySelector('.room__photo-link img').src = imageSrc;

    return smallPhotoElement;
  }

  var smallPhotoRoomList = function (elem, photoList ) {
    var fragment = document.createDocumentFragment();

    fragment.appendChild(setPhotoSrc(elem));
    photoList.appendChild(fragment);

  }




  this.renderCard = function (elem) {
    var cardElement = mapCardTemplate.cloneNode(true);

    cardElement.id =  'room-id__' + elem.id;
    cardElement.querySelector('.rooms-order__modal').id = 'modal-id__' + elem.id;
    cardElement.querySelector('.card-room__title').innerHTML = elem.title;
    cardElement.querySelector('.price__sell').innerHTML = elem.sale_price + ' руб / сутки';
    cardElement.querySelector('.price__old').innerHTML = elem.price + ' руб / сутки';
    cardElement.querySelector('.card-room__description').innerHTML = elem.price_for;
    cardElement.querySelector('.card-room__img').src = elem.thumbnail;
    cardElement.querySelector('.room__title').innerHTML = elem.title;
    cardElement.querySelector('.room__adress').innerHTML = elem.metro_station + ', ' + elem.address.slice(10);
    cardElement.querySelector('.room__big-jmg').src = elem.thumbnail;

    if (elem.sale_price !== '-') {
      cardElement.querySelector('.price__sell').innerHTML = elem.sale_price + ' руб / сутки';
      cardElement.querySelector('.card-room__sale-icon').classList.remove('card-room__sale-icon--hide');
      cardElement.querySelector('.card-room__sale-icon').classList.add('card-room__sale-icon--show')
    } else {
      cardElement.querySelector('.price__sell').innerHTML = elem.price + ' руб / сутки';
      cardElement.querySelector('.price__old').innerHTML = '';
    }

    if (elem.price_for === '1') {
      cardElement.querySelector('.card-room__description').innerHTML = 'Цена указана на 1 человека';
    } else if ( elem.price_for === '2') {
      cardElement.querySelector('.card-room__description').innerHTML = 'Цена указана на 2 человек';
    } else {
      cardElement.querySelector('.card-room__description').innerHTML = elem.price_for;
    }

    var mapImages = elem.images.split(',');

    cardElement.querySelector('.room__small-photos').innerHTML = "";
    smallPhotoRoomList(elem.thumbnail, cardElement.querySelector('.room__small-photos'));
    mapImages.map( function ( elem ){
      if (elem.length > 5) {
        smallPhotoRoomList(elem, cardElement.querySelector('.room__small-photos'));
      }
    })

    return cardElement;
  }

  this.getRoomsFromBackEnd = function () {
    orderList.innerHTML = '';

    $.ajax(
      {
        url: 'http://hostels.landingheroes.ru/rooms',
        ataType: 'json',
        method: 'post',
        async: false,
        context: this,
        success: function( res )
        {
          res.map (function ( Obj ) {
            roomsFromBackEnd.push(Obj)
          })
          console.log(roomsFromBackEnd);
        },
        error: function( err )
		  	{
			  	console.error(err)
		  	}
      }
    )

    return roomsFromBackEnd;
  }

  getRoomsFromBackEnd();

  var addCardOnSite = function (card) {
    var fragment = document.createDocumentFragment();

    fragment.appendChild(renderCard(card));
    orderList.appendChild(fragment);
  };

  // roomsFromBackEnd.map( function ( elem ){
  //   addCardOnSite(elem);
  // })

  var renderSomeCards = function ( array, maxRenderElement) {
    for (var i = 0; i < maxRenderElement && i < array.length; i++) {
      console.log(array[i],'   ' + i)
      addCardOnSite(array[i]);
    }
  }

  renderSomeCards(roomsFromBackEnd, 8);

  setHandlerOnSliderButtons();


  window.modal.changeSmallPhotoToBig()

  window.roomsBackEnd = {
    'fromBack': roomsFromBackEnd,
    'addCardOnSite': addCardOnSite,
    'resetListRooms': resetListRooms
  }
})();
