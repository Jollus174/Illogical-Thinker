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

/*
	Mosaic - Sliding Boxes and Captions jQuery Plugin
	Version 1.0.1
	www.buildinternet.com/project/mosaic
	
	By Sam Dunn / One Mighty Roar (www.onemightyroar.com)
	Released under MIT License / GPL License
*/

(function($) {
	'use strict';
	if (!$.omr) {
		$.omr = new Object();
	}

	$.omr.mosaic = function(el, options) {
		var base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data('omr.mosaic', base);

		base.init = function() {
			base.options = $.extend({}, $.omr.mosaic.defaultOptions, options);

			base.load_box();
		};

		// Preload Images
		base.load_box = function() {
			// Hide until window loaded, then fade in
			if (base.options.preload) {
				$(base.options.backdrop, base.el).hide();
				$(base.options.overlay, base.el).hide();

				$(window).load(function() {
					// IE transparency fade fix
					if (
						base.options.options.animation == 'fade' &&
						$(base.options.overlay, base.el).css('opacity') == 0
					)
						$(base.options.overlay, base.el).css('filter', 'alpha(opacity=0)');

					$(base.options.overlay, base.el).fadeIn(200, function() {
						$(base.options.backdrop, base.el).fadeIn(200);
					});

					base.allow_hover();
				});
			} else {
				$(base.options.backdrop, base.el).show();
				$(base.options.overlay, base.el).show();
				base.allow_hover();
			}
		};

		// Initialize hover animations
		base.allow_hover = function() {
			// Select animation
			switch (base.options.animation) {
				// Handle fade animations
				case 'fade':
					$(base.el).hover(
						function() {
							$(base.options.overlay, base.el)
								.stop()
								.fadeTo(base.options.speed, base.options.opacity);
						},
						function() {
							$(base.options.overlay, base.el)
								.stop()
								.fadeTo(base.options.speed, 0);
						}
					);

					break;

				// Handle slide animations
				case 'slide':
					// Grab default overlay x,y position
					startX =
						$(base.options.overlay, base.el).css(base.options.anchor_x) !=
						'auto'
							? $(base.options.overlay, base.el).css(base.options.anchor_x)
							: '0px';
					startY =
						$(base.options.overlay, base.el).css(base.options.anchor_y) !=
						'auto'
							? $(base.options.overlay, base.el).css(base.options.anchor_y)
							: '0px';

					var hoverState = {};
					hoverState[base.options.anchor_x] = base.options.hover_x;
					hoverState[base.options.anchor_y] = base.options.hover_y;

					var endState = {};
					endState[base.options.anchor_x] = startX;
					endState[base.options.anchor_y] = startY;

					$(base.el).hover(
						function() {
							$(base.options.overlay, base.el)
								.stop()
								.animate(hoverState, base.options.speed);
						},
						function() {
							$(base.options.overlay, base.el)
								.stop()
								.animate(endState, base.options.speed);
						}
					);

					break;
			}
		};

		// Make it go!
		base.init();
	};

	$.omr.mosaic.defaultOptions = {
		animation: 'fade',
		speed: 150,
		opacity: 1,
		preload: 0,
		anchor_x: 'left',
		anchor_y: 'bottom',
		hover_x: '0px',
		hover_y: '0px',
		overlay: '.mosaic-overlay', //Mosaic overlay
		backdrop: '.mosaic-backdrop' //Mosaic backdrop
	};

	$.fn.mosaic = function(options) {
		return this.each(function() {
			new $.omr.mosaic(this, options);
		});
	};
})(jQuery);
