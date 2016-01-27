$(function(){
	$('.lang__select').selectOrDie({
		customClass:'no_highlight lang__select'
	})
	$('select.popup-form__input:not(.small, .middle)').selectOrDie({
		customClass:'no_highlight popup-form__input'
	})
	$('select.popup-form__input.small').selectOrDie({
		customClass:'no_highlight popup-form__input small'
	})
	$('select.popup-form__input.middle').selectOrDie({
		customClass:'no_highlight popup-form__input middle'
	})
	$('#city, .cities__a').click(function(){
		$('.cities').toggleClass('expand');
	})
	$('.carousel__a.vvod').magnificPopup({
		items: {
			src: '#modal-vvod',
			type: 'inline'
		}
	})
	$('.carousel__a.oplata').magnificPopup({
		items: {
			src: '#modal-oplata',
			type: 'inline'
		}
	})
	$('.choose-method__vvod').click(function(){
		if ($(this).hasClass('active')) {
			return false;
		};
		$(this).addClass('active');
		$(this).siblings('.choose-method__vvod').removeClass('active');
		$(this).closest('.choose-method').find('.roller-block').toggleClass('toright');
	})	

	// script for background color on page
	if ($('.main.green').hasClass('green')) {
		$('.wrapper').addClass('green');
	}
	if ($('.main').hasClass('oplata')) {
		$('.wrapper').addClass('blue');
	}
	if ($('.main').hasClass('vvod')) {
		$('.wrapper').addClass('yellow');
	}

	// trigger for chooding method of pay
	$('.choose-cash__link').click(function(){
		if (!$(this).hasClass('right')) {
			$('.choose-cash__trigger').removeClass('move');
			return false;
		};
		$('.choose-cash__trigger').addClass('move');
	})
	$('.callback__button[data-color]').click(function(e){
		e.preventDefault();
		var color = $(this).data().color;
		var main_color = '';
		switch (color){
			case 'blue':
			main_color = 'oplata';	
			break;
			case 'yellow':
			main_color = 'vvod';	
			break;
			case 'green':
			main_color = 'partner';	
			break;
		}
		var $wrapper = $('.wrapper');
		var $main = $('.main');
		$wrapper.removeClass('yellow blue green');
		$main.removeClass('oplata vvod partner')
		$('.carousel__a').removeClass('oplata vvod')
		if (color == 'reset') {
			return false;
		};
		$('.carousel__a').addClass(main_color);
		$main.addClass(main_color);
		$wrapper.addClass(color);
	})
})