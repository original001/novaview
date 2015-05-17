$ ->
	unless Modernizr.mq '(min-width:0px)'
		$ 'body'
			.addClass 'no-mq'
	unless Modernizr.svg 
		noSvgImg = $ '[data-no-svg]'
		noSvgImg.each ->
			th = $ this
			png = th.attr 'data-no-svg'
			th.attr 'src', png

