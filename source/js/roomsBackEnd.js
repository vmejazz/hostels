(function () {
  this.$container = $('#rooms-order')
  var orderList = document.querySelector('.rooms-order__list');
  var roomsFromBackEnd = [];
  var mapCardTemplate = document.querySelector('#card-room__template')
  .content
  .querySelector('.rooms-order__item');

  console.log(mapCardTemplate);
  // this.renderCards = function (e) {
  //   var r = ''

  //   window.roomsBackEnd.fromBack.map( function (elem) {



  //   })
  // }

  // this.checkSaleState = function (elem) {
  //   if (elem.sale_price = ) {

  //   }
  // }

  this.renderCard = function (elem) {
    var cardElement = mapCardTemplate.cloneNode(true);

    cardElement.querySelector('.card-room__title').innerHTML = elem.title;
    cardElement.querySelector('.price__sell').innerHTML = elem.sale_price + ' руб / сутки';
    cardElement.querySelector('.price__old').innerHTML = elem.price + ' руб / сутки';
    cardElement.querySelector('.card-room__description').innerHTML = elem.price_for;
    cardElement.querySelector('.card-room__img').src = elem.thumbnail;
    cardElement.querySelector('.room__title').innerHTML = elem.title;
    cardElement.querySelector('.room__adress').innerHTML = elem.metro_station + ', ' + elem.address.slice(10);

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

    return cardElement;
  }

  this.getRoomsFromBackEnd = function () {
    $.ajax(
      {
        url: 'http://hostels.landingheroes.ru/rooms',
        ataType: 'json',
        method: 'post',
        async: false,
        context: this,
        success: function( res )
        {
          console.log(res)
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

  roomsFromBackEnd.map( function ( elem ){
    addCardOnSite(elem);
  })

  console.log(roomsFromBackEnd[0])

  window.roomsBackEnd = {
    'fromBack': roomsFromBackEnd
  }
})();
