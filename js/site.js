// This function runs when the html is loaded and ready
$(document).ready(function() {
  var windowHeight = $( window ).height();
  $('#landing-image').css('height', windowHeight);
  $('.menu-bar-fixed').affix({offset: {top: windowHeight} });
});
