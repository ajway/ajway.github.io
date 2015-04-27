$(document).ready(function() {
    $('#logo-pic').hide().fadeIn(5000);

    $('#backtotop').click(function() {
    	$('html, body').animate({scrollTop:0}, 'slow');
    	return false;
    });
});