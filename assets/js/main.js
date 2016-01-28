$(function() {
  var noSvgImg;
  if (!Modernizr.mq('(min-width:0px)')) {
    $('body').addClass('no-mq');
  }
  if (!Modernizr.svg) {
    noSvgImg = $('[data-no-svg]');
    return noSvgImg.each(function() {
      var png, th;
      th = $(this);
      png = th.attr('data-no-svg');
      return th.attr('src', png);
    });
  }
});
