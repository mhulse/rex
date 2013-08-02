/*jshint devel:true */

STOOPS.register(function() {
	
	'use strict';
	
	console.log('test');
	
	var $se = $('.stoops-figure-test').wrap('<div class="stoops-el" />');
	
	console.log('stoops-el height:', $se.height());
	
	// $('.stoops-el').height($se.height());
	
}); // STOOPS!
