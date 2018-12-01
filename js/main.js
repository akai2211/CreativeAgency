$(document).ready(function() {

  $('.humburger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('hum-active');
    $('.menu').slideToggle('slow');
  });
  
  });