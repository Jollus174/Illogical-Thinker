bravo.breakpoints = (function() {

    'use strict';

    var initialize = function() {

    };

    var getCurrent = function() {

		return window.getComputedStyle(
			document.querySelector('body'), ':before'
		).getPropertyValue('content').replace(/["']/g, '');

    };

    return {
    	init: initialize,
    	getCurrent: getCurrent
    };

}());