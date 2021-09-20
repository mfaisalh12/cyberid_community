$(document).ready(function () {
	const password1 = $('#password1');
	$('#eye1').click(function () {
		if (password1.prop('type') == 'password') {
			$(this).toggleClass('bxs-show');
			password1.attr('type', 'text');
		} else {
			$(this).removeClass('bxs-show');
			password1.attr('type', 'password');
		}
	});
	const password2 = $('#password2');
	$('#eye2').click(function () {
		if (password2.prop('type') == 'password') {
			$(this).toggleClass('bxs-show');
			password2.attr('type', 'text');
		} else {
			$(this).removeClass('bxs-show');
			password2.attr('type', 'password');
		}
	});
});
