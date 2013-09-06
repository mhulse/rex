/**
 * Rex (O'Herlihan)
 * Oh yeah, root's kicking in!
 *
 * @author Micky Hulse
 * @link http://mhulse.com
 * @docs https://github.com/mhulse/rex
 * @copyright Copyright (c) 2013 Micky Hulse.
 * @license Released under the Apache License, Version 2.0.
 * @version 0.4.0
 * @date 2013/09/05
 */

(function(document) {
	
	'use strict';
	
	var $switch = document.createElement('a'),
	       txt0 = 'Enable CSS',
	       txt1 = 'Disable CSS';
	
	$switch.href = '#';
	$switch.innerHTML = txt1;
	$switch.setAttribute('style', 'position:fixed;top:5px;right:5px;padding:5px 10px;background:rgba(0,0,0,.1);border:1px solid rgba(0,0,0,.1);border-radius:3px;');
	
	$switch.onclick = function() {
		
		var $style,
		    i,
		    l;
		
		this.innerHTML = ((this.innerHTML == txt1) ? txt0 : txt1);
		
		for (i = 0, l = document.styleSheets.length; i < l; i++) {
			
			$style = document.styleSheets.item(i);
			
			void($style.disabled = ( ! $style.disabled));
			
		}
		
		return false;
		
	};
	
	document.body.appendChild($switch);
	
}(document));
