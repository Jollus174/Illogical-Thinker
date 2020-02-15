/* global Swiper */
$(function() {
	'use strict';

	/* $('.immersive-navigation').on('click', function() {
		var scrollTop = $('#scrollTo').offset().top - 20;
		$('html, body').animate({ scrollTop: scrollTop }, 500);
	}); */

	const $body = $('body');

	if ($body.hasClass('page-home')) {
		var homepageSwiper = new Swiper('#homepage-swiper', {
			spaceBetween: 24,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			loop: false,
			grabCursor: true,
			breakpoints: {
				767: {}
			}
		});

		var oldSlideIndex = 0;

		homepageSwiper.init();

		$('.feature-descriptions')
			.children()
			.first()
			.show();

		homepageSwiper.on('slideChange', function() {
			console.log(homepageSwiper.realIndex);

			// fade element
			var $oldFeature = $('.feature-descriptions')
				.children()
				.eq(oldSlideIndex);
			var $newFeature = $('.feature-descriptions')
				.children()
				.eq(homepageSwiper.realIndex);

			$oldFeature.fadeOut('fast', function() {
				$newFeature.fadeIn('fast');
				// then update old index
				oldSlideIndex = homepageSwiper.realIndex;
			});
		});
	}

	if ($body.hasClass('page-work')) {
		$('.fade').mosaic();
		Shadowbox.init();
	}

	//plugin function, place inside DOM ready function
	/* outdatedBrowser({
		bgColor: '#343e47',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/lang/en.html'
	}); */

	//if iOS Safari then add css class
	/* var ua = window.navigator.userAgent;
	var iOS = /iPad/i.test(ua) || /iPhone/i.test(ua);
	var webkit = /WebKit/i.test(ua);
	var iOSSafari = iOS && webkit && !/CriOS/i.test(ua);

	if (iOSSafari) {
		$('.immersive-navigation').addClass('immersive-navigation-safari');
	} */
});
