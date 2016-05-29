$(function(){
	$(document).on('click', '#btn-menu', function(){
		$('#menu-of-canvas')
		.animate({right:'0'});
		$('body').css('position', 'fixed');
		$(this).addClass('fecha');
	});
	$(document).on("click", '.fecha', function() {
		$('#menu-of-canvas').animate({right:'-100%'});
		$(this).removeClass('fecha');
		$('body').css('position', 'static');
	});
});