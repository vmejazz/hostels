var MetroPicker = function()
{
	this.$container = $('.metro-field__box')
	this.$checkbox  = this.$container.find('.metro-field__checkbox')
	this.$button    = this.$container.find('.metro-field__button')
	this.$list      = this.$container.find('.metro-field__checkbox-list')
  this.$reset     = this.$container.find('.metro-field__checkbox-button[type=reset]')
  this.$metroInput = this.$container.find('.metro-field__input')
  this.$startSearch = this.$container.find('.metro-field__find-button')

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

	//
	this.$button.on('click', function(e){
		e.preventDefault()

		if(this.state.open) {
			this.close()
		} else {
			this.open()
		}

	}.bind(this))
  //

  //
  this.$metroInput.focus( function ()
  {
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
		var station = $(e.currentTarget).text()
		this.state.options.map( function(option){


			if( option.title.trim() == station.trim() ) {
				console.log( station )
				option.checked == true ? option.checked = false : option.checked = true
			}
		} )
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
		          r += ' <span class="metro-icon metro-icon--light-green"></span>'
		        r += '</label>'
        r += '</li>'
      }
		} )

		this.$list.html( r )

	}

	this.reset = function()
	{

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
	}

	this.$reset.click( this.reset.bind(this) )

	this.getChekedStations = function()
	{
		return this.state.options.filter( function( option ) {
			return option.checked == true
		} )
  }

//            Запрашиваем и рисуем данные с бэка

	// this.getStations = function()
	// {
	// 	$.ajax( {

	// 		url: '/stations',
	// 		dataType: 'json',
	// 		method: 'get',
	// 		context: this,
	// 		success: function( res )
	// 		{
	// 			var stations = []

	// 			res.map( function( station ){
	// 				stations.push( { title: station, checked: false } )
	// 			} )

	// 			this.state.options = stations
	// 			this.renderStations()
	// 		},
	// 		error: function( err )
	// 		{
	// 			console.error(err)
	// 		}

	// 	} )
	// }

	// this.getStations()

  this.renderStations()

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
    this.$metroInput.val('')
    var i = 0;
    this.state.options.map( function( option ){
      if (option.checked && i < 3) {
        i += 1;
        oldValueInput = this.$metroInput.val()
        this.$metroInput.val(oldValueInput + option.title + ', ')
      }
    }.bind(this))
    this.close()
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
