var MetroPicker = function()
{
	this.$container = $('.metro-field__box')
	this.$checkbox  = this.$container.find('.metro-field__checkbox')
	this.$button    = this.$container.find('.metro-field__button')
	this.$list      = this.$container.find('.metro-field__checkbox-list')
  this.$reset     = this.$container.find('.metro-field__checkbox-button[type=reset]')
  this.$metroInput = this.$container.find('.metro-field__input')
  this.$startSearch = this.$container.find('.metro-field__find-button')
  this.$loadingImg = this.$container.find('.metro-field__loading')

  this.showLoadingAction = function () {
    this.$loadingImg.toggleClass('metro-field__loading--show')
    this.$loadingImg.toggleClass('metro-field__loading--hide')
  }.bind(this)

  var showLoadingCards = function () {
    var cardsField = $(document).find('.rooms-order__preloader');
    cardsField.toggleClass('rooms-order__preloader--loading')
  }

	this.state = {
		open: false,
		value: '',
		options: [
			{
				title:'Маяковская',
        checked: false,
        filtred: true
			},
			{
				title:'Арбатская',
				checked: false,
        filtred: true
			},
			{
				title:'Ясенево',
				checked: false,
        filtred: true
			},
			{
				title:'Третьяковская',
				checked: false,
        filtred: true
			}
		]
	}

	this.open = function()
	{
		this.state.open = true
		this.$container.trigger('stateChange')
	}

	this.close = function()
	{
		this.state.open = false
		this.$container.trigger('stateChange')
	}

	$('body').on( 'click', function(e){
		if( !$(e.target).is('.metro-field__checkbox-label, input, .metro-field__find-button button,.metro-field__checkbox-list') ) {
			this.close()
		}
	}.bind(this) )

	//
	this.$button.on('click', function(e){
		e.preventDefault()
		e.stopPropagation()
		if(this.state.open) {
			this.close()
		} else {
			this.open()
		}

	}.bind(this))
  //
	this.$metroInput.click(function(e){console.log(e);e.stopPropagation()})
  //
  this.$metroInput.focus( function (e)
  {
		e.preventDefault()
    this.$metroInput.val('')
    this.state.options.map( function (option)
    {
      option.filtred = true;
    })
    if(this.state.open == false) {
      this.open()
    }
  }.bind(this))

  // this.$metroInput.focusout( function ()
  // {
  //   this.close()
  // }.bind(this))
  //



	this.toggleStation = function(e)
	{
		e.stopPropagation()

		var station = $(e.currentTarget).text()
		this.state.options.map( function(option){


			if( option.title.trim() == station.trim() ) {
        option.checked == true ? option.checked = false : option.checked = true
        // this.$startSearch.click();       //  Отфильтровать после выбора станции
			}
		}.bind(this) )
	}

	$(document).on( 'click', '.metro-field__checkbox-label', this.toggleStation.bind(this) )


	$('.metro-field__box').on( 'stateChange', function(){

		if( this.state.open ) {

			this.$container.addClass('metro-field__box--active')
			this.$checkbox.addClass('metro-field__checkbox--show')
			this.$checkbox.removeClass('metro-field__checkbox--hide')

		} else {

			this.$container.removeClass('metro-field__box--active')
			this.$checkbox.removeClass('metro-field__checkbox--show')
			this.$checkbox.addClass('metro-field__checkbox--hide')

		}

	}.bind(this))

	this.renderStations = function()
	{
		var r = ''

		this.state.options.map( function( option ){
      if (option.filtred) {
			  r += '<li class="metro-field__checkbox-item">'
		        r += '<input type="checkbox" id="'+option.title+'" value="'+option.title+'" ' + ( option.checked ? ' checked' : '' ) + '>'
		        r += '<label class="metro-field__checkbox-label" for="'+option.title+'">'
              r += option.title
              option.colors.map( function (color) {
                r += ' <span class="metro-icon metro-icon--'+color+'"></span>'
              })
		        r += '</label>'
        r += '</li>'
      }
		} )

		this.$list.html( r )

	}

	this.reset = function(e)
	{
		e.stopPropagation()
		$('.metro-field__checkbox-item > input').prop( 'checked', false )
		this.state.options.map( function( option ){
			option.checked = false
		} )
    this.$metroInput.val('')
    this.state.options.map( function (option)
    {
      option.filtred = true;
    })
    this.renderStations()

    window.roomsBackEnd.resetListRooms()
    window.roomsBackEnd.renderSomeCards(window.roomsBackEnd.fromBack, 8)
	}

	this.$reset.click( this.reset.bind(this) )

	this.getChekedStations = function()
	{
		return this.state.options.filter( function( option ) {
			return option.checked == true
		} )
  }

//            Запрашиваем и рисуем данные с бэка

	this.getStations = function()
	{
		$.ajax( {

			url: 'http://hostels.landingheroes.ru/stations',
			dataType: 'json',
			method: 'get',
			context: this,
			success: function( res )
			{
				var stations = []

				res.map( function( station ){
					stations.push( { title: station.title, checked: false, filtred: true, colors: station.line.split(',') } )
				} )

				this.state.options = stations
				this.renderStations()
			},
			error: function( err )
			{
				console.error(err)
			}

		} )
	}

  //        Рисуем станции
	this.getStations()

  // this.renderStations()

  var getInputFilterStations = function (target) {
		this.state.options.map( function( option ){
      if (option.title.toLowerCase().indexOf(target) + 1) {
        console.log('yes')
        option.filtred = true;
      } else {
        option.filtred = false
      }
    })
  }.bind(this);

  this.$startSearch.click( function(e)
  {
		e.stopPropagation()
    // this.showLoadingAction()
    // setTimeout(this.showLoadingAction, 1000)
    this.$metroInput.val('')
    var i = 0;
    this.state.options.map( function( option ){
      if (option.checked && i < 3) {
        i += 1;
        oldValueInput = this.$metroInput.val()
        this.$metroInput.val(oldValueInput + option.title + ', ')
      }
    }.bind(this))
    // this.close()

    var chackedStations = this.getChekedStations();
    window.roomsBackEnd.resetListRooms()
    window.roomsBackEnd.fromBack.map( function ( elem ) {
      // console.log(chackedStations)
      for (var i = 0; i < chackedStations.length; i++) {
			// /	console.log( elem )
        if (elem.metro.title === chackedStations[i].title) {
          window.roomsBackEnd.addCardOnSite(elem)
        }
      }
    })

    showLoadingCards();
    setTimeout(showLoadingCards, 500)
    window.modal.changeSmallPhotoToBig()
    window.guestRange.guestNumberHandler();
    this.close();
  }.bind(this))

  this.$metroInput.on('input', function(){
    console.log(this.$metroInput.val())
    var target = this.$metroInput.val().toLowerCase()
    getInputFilterStations(target)
    this.renderStations()
  }.bind(this))

	return this
}

var mp = new MetroPicker()
