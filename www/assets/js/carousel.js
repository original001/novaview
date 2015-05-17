(function() {
  $(function() {
    $('.carousel').slick({
      adaptiveHeight: true,
      dots: true,
      draggable: false,
      arrows: false,
      asNavFor: '.carousel-headers'
    });
    return $('.carousel-headers').slick({
      adaptiveHeight: true,
      asNavFor: '.carousel',
      draggable: false,
      fade: true,
      arrows: true,
      prevArrow: '<div class="arrow-l" />',
      nextArrow: '<div class="arrow-r" />'
    });
  });

}).call(this);
