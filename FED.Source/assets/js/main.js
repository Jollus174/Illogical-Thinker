/* global Swiper */
$(function() {
	'use strict';

	/* $('.immersive-navigation').on('click', function() {
		var scrollTop = $('#scrollTo').offset().top - 20;
		$('html, body').animate({ scrollTop: scrollTop }, 500);
	}); */

	if ($('body').hasClass('page-home')) {
		var homepageSwiper = new Swiper('#homepage-swiper', {
			spaceBetween: 24,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			loop: true,
			breakpoints: {
				767: {}
			}
		});

		homepageSwiper.init();
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
