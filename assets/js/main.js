(function($) {
    "use strict";


	/* ======= STICKY MENU ======= */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky-menu');
		} else {
			$("header").removeClass('sticky-menu');
		}
	});

	/* ====== SHOW & HIDE MENU ====== */
	$(".menu-show-btn").click(function () {
		$(".main-menu").addClass("show-menu");
	});
	$(".menu-close-icon").click(function () {
		$(".main-menu").removeClass("show-menu");
	});


	/* ====== SUB MENU SHOW & HIDE ====== */
	$(".sub-menu-icon").click(function () {
		$(".sub-menu").slideToggle("");
	});

})(jQuery);
