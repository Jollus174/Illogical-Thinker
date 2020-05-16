/* global Swiper, Shadowbox */
$(function () {
	'use strict';

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
			loop: true,
			grabCursor: true,
			breakpoints: {
				767: {}
			}
		});

		homepageSwiper.init();

		var $allSlides = $('.feature-descriptions .feature-description');
		$('.feature-descriptions').children().first().addClass('active');

		homepageSwiper.on('slideChange', function () {
			// fade element
			$allSlides.removeClass('active');
			$allSlides.eq(homepageSwiper.realIndex).addClass('active');
		});
	}

	if ($body.hasClass('page-home') || $body.hasClass('page-work')) {
		Shadowbox.init();
	}

	if ($body.hasClass('page-work')) {
		$('.fade').mosaic();
	}
});
