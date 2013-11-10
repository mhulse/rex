(function(document) {
	
	'use strict';
	
	var $switch = document.createElement('a'),
	       txt0 = 'Enable CSS',
	       txt1 = 'Disable CSS';
	
	$switch.href = '#';
	$switch.innerHTML = txt1;
	$switch.setAttribute('style', 'position:fixed;top:25px;right:25px;padding:5px 10px;background:rgba(0,0,0,.1);border:1px solid rgba(0,0,0,.1);border-radius:3px;');
	
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
