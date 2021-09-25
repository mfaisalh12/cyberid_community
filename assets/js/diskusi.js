$(document).ready(function () {
	$('.tab-content:first').show();
	$('.tab-navigation li:first').addClass('active');

	$('.tab-navigation li').click(function () {
		index = $(this).index();
		$('.tab-navigation li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();
		$('.tab-content').eq(index).show();
	});
});

$('#first-card').click(function () {
	$(location).prop('href', 'firstquestion.html');
});
