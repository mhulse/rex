/*! rgne.ws/WnP50T */
;(function(window, document) {
	
	/**
	 * @see rgne.ws/N9c4uV
	 * @see rgne.ws/MuCQZI
	 */
	
	if (('ontouchstart' in window) || (window.DocumentTouch && (document instanceof DocumentTouch))) {
		
		document.documentElement.className = document.documentElement.className.replace(/\bno-touch\b/, 'touch');
		
	}
	
	/**
	 * @see rgne.ws/MuCQZI
	 */
	
	document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');
	
}(window, document));
