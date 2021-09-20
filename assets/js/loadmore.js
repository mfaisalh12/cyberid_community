// Event Page
$('.card-event').slice(0, 6).show();
$('.loadMore').on('click', function () {
	$('.card-event:hidden').slice(0, 3).slideDown();
	if ($('.card-event:hidden').length == 0) {
		$('.loadMore').fadeOut('slow');
	}
});

// Challenge Page
$('.card-challenge').slice(0, 8).show();
$('.seeall').on('click', function () {
	$('.card-challenge:hidden').slice(0, 100).slideDown();
	if ($('.card-challenge:hidden').length == 0) {
		$('.seeall').fadeOut('slow');
	}
});

$('#resetFilter').click(function () {
	$(location).prop('href', 'challenge.html');
});
