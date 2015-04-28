$( document ).ready( function() {
  
  $('.image-container').hover(function(){
    $(this).find('.top-layer').animate({opacity:"0.0"}, {duration:500, queue: false});
    $(this).find('.buffer-layer').animate({opacity:"0.0"}, {duration:500, queue: false});
    }
    , function(){
    $(this).find('.top-layer').animate({opacity:"1.0"}, {duration:500, queue: false});
    $(this).find('.buffer-layer').animate({opacity:"1.0"}, {duration:500, queue: false});

  });

  
});
