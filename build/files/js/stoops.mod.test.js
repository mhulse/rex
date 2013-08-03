/*jshint devel:true */

STOOPS.register(function() {
	
	'use strict';
	
	var $test = $('.test'),
	    $se = $test.wrap('<div class="foo" />'),
	    offset = $test.offset(),
	    x,
	    y;
	
	console.log($se.height());
	
	x = offset.left;
	y = offset.top;
	
	console.log('x: ' + x + ' y: ' + y);
	
	//$('.fooz').offset({'top': y});
	
	//$test.height($se.height() + 50);
	
}); // STOOPS!
