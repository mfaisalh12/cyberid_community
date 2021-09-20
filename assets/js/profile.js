$(function () {
	$('.bars li .bar').each(function (key, bar) {
		var percentage = $(this).data('percentage');
		$(this).animate({
			height: percentage + '%',
		});
	});
});

$('.counter').each(function () {
	const This = $(this);
	$({ Count: This.text() }).animate(
		{ Count: This.parent().attr('data-count') },
		{
			duration: 100,
			easing: 'linear',
			step: function () {
				This.text(Math.floor(this.Count));
			},
		},
	);
});
