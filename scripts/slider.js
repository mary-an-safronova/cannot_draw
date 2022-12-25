$(window).on('load resize', function () {
	if ($(window).width() < 600) {
		$('.preview__slider:not(.slick-initialized)').slick({
			arrows: false,
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			easing: 'ease',
			infinite: false,
			initialSlide: 0,
			autoplay: false,
			autoplaySpeed: 6000,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			draggable: true,
			swipe: true,
			touchThreshold: 10,
			touchMove: true,
			waitForAnimate: false,
			centerMode: false,
			variableWidth: false
		});
		$('.benefits-top__slider:not(.slick-initialized)').slick({
			arrows: false,
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			easing: 'ease',
			infinite: false,
			initialSlide: 0,
			autoplay: false,
			autoplaySpeed: 6000,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			draggable: true,
			swipe: true,
			touchThreshold: 10,
			touchMove: true,
			waitForAnimate: false,
			centerMode: false,
			variableWidth: false
	});
	$('.benefits-bottom__slider:not(.slick-initialized)').slick({
			arrows: false,
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			easing: 'ease',
			infinite: false,
			initialSlide: 0,
			autoplay: false,
			autoplaySpeed: 6000,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			draggable: true,
			swipe: true,
			touchThreshold: 10,
			touchMove: true,
			waitForAnimate: false,
			centerMode: false,
			variableWidth: false
	});
	} else {
		$(".preview__slider.slick-initialized").slick("unslick");
		$(".benefits-top__slider.slick-initialized").slick("unslick");
		$(".benefits-bottom__slider.slick-initialized").slick("unslick");
	}
});
