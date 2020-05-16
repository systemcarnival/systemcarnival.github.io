$(document).ready( function() {
    $('.step').each(function(index, element) {
      // element == this
      $(element).not('.active').addClass('done');
      $('.done').html('<i class="icon-ok"></i>');
      if($(this).is('.active')) {
        return false;
      }
    });    
  });