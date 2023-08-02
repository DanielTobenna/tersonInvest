jQuery(document).ready(function($) {

    // Preloader
    $(window).on('load', function () {
        $('#preloader').fadeOut(1000); 
       });
     
       
    $('a.next').text('→');
    $('a.prev').text('←');

  if (window.location.href.indexOf("home") > -1) {
      $('body').addClass('home_not_set');
    }

});
