// external js: isotope.pkgd.js

$( document ).ready( function() {
  // init Isotope
  var $container = $('.roster-container').isotope({
    itemSelector: '.roster-item',
    layoutMode: 'fitRows'
  });

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  $('.roster-item').hover(function(){
    $(this).find('.member-name').css("opacity", "0.0");
    }, function(){
    $(this).find('.member-name').css("opacity", "1.0");
  });

  
});
