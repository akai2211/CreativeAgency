$(document).ready(function() {

  $('.humburger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('hum-active');
    $('.menu').slideToggle('slow');
  });

  let $window = $(window),
      $slick = $(".team-face-blocks"),
      toggleSlick;
  
  toggleSlick = function() {
    if ($window.whidth() > 992) {
      $slick.slick();
    } else {
      $slick.unslick();
    }
  }

  $window.resize(toggleSlick);
  toggleSlick();
  
  });