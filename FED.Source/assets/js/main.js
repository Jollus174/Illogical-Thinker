$(function() {
	'use strict';

	$('.site-menu a').attr('tabindex', '-1');

	// initialise modules
	bravo.navigation.init();

	$('.immersive-navigation').on('click', function() {
		var scrollTop = $('#scrollTo').offset().top - 20;
		$('html, body').animate({ scrollTop: scrollTop }, 500);
	});

	if ($('body').hasClass('immersive')) {
		var teamSwiper = new Swiper('.team-swiper-container', {
			spaceBetween: 24,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				767: {}
			}
		});

		var immerseSwiper = new Swiper('.immersive-carousel-container', {
			spaceBetween: 24,
			pagination: {
				el: '.swiper-pagination'
			},
			breakpoints: {
				767: {
					slidesPerView: 1
				},
				1219: {
					slidesPerView: 2,
					slidesPerGroup: 2
				}
			}
		});
	}

	$('.toggle-video-audio').click(function() {
		var $targetEl = $('#' + $(this).data('target'));
		$targetEl.prop('muted', !$targetEl.prop('muted'));
	});

	//plugin function, place inside DOM ready function
	outdatedBrowser({
		bgColor: '#343e47',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/lang/en.html'
	});

	//if iOS Safari then add css class
	var ua = window.navigator.userAgent;
	var iOS = /iPad/i.test(ua) || /iPhone/i.test(ua);
	var webkit = /WebKit/i.test(ua);
	var iOSSafari = iOS && webkit && !/CriOS/i.test(ua);

	if (iOSSafari) {
		$('.immersive-navigation').addClass('immersive-navigation-safari');
	}
});
