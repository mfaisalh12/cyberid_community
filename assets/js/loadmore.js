$('.card-event').slice(0, 6).show();
$('.loadMore').on('click', function () {
	$('.card-event:hidden').slice(0, 3).slideDown();
	if ($('.card-event:hidden').length == 0) {
		$('.loadMore').fadeOut('slow');
	}
});
