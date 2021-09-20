$(document).ready(function () {
	const password = $('#password');
	$('#eye').click(function () {
		if (password.prop('type') == 'password') {
			$(this).toggleClass('bxs-show');
			password.attr('type', 'text');
		} else {
			$(this).removeClass('bxs-show');
			password.attr('type', 'password');
		}
	});
});
