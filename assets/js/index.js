// Menu Toggle
$('.menu-toggle-btn').click(function () {
	$(this).toggleClass('bx-x');
	$('.navigation-menu').toggleClass('active');
});

// Dropdown
$('.dropdown-toggle').hover(function () {
	$('.icon-dropdown').toggleClass('bxs-up-arrow');
});

// Counter

$('.counter').each(function () {
	const This = $(this);
	$({ Count: This.text() }).animate(
		{ Count: This.parent().attr('data-count') },
		{
			duration: 2000,
			easing: 'linear',
			step: function () {
				This.text(Math.floor(this.Count));
			},
		},
	);
});
