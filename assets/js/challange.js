$(document).ready(function () {
	$('#first-challange').click(function () {
		$('#modal, #bg').fadeIn('slow');
	});
	$('#bg, .bx-x').click(function () {
		$('#modal, #bg').fadeOut('slow');
	});
});
