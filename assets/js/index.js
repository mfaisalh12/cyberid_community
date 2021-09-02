$('.menu-toggle-btn').click(function () {
	$(this).toggleClass('bx-x');
	$('.navigation-menu').toggleClass('active');
});

$('.dropdown-toggle').hover(function () {
	$('.icon-dropdown').toggleClass('bxs-up-arrow');
});
