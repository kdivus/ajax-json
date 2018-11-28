var handleNavbar = function(element){
	$(window).scroll(function(){
		//console.log();
		if($(window).scrollTop() > 100){
			$(element).css({
				'padding-top': 0,
				'padding-bottom': 0,
				'background-color': '#fff'
				});
				$(element + ' a').css('color', '#111');
		} else {
			// jedan(brži) način 
			$(element).removeAttr('style');
			$(element + ' a').removeAttr('style');
			
			
			// drugi način
			/* $(element).css({
				'padding-top': '3rem',
				'padding-bottom': '2rem',
				'background-color': 'transparent'
				});
				$(element + ' a').css('color', '#eee'); */
		}
	});
};


var App = function(){
	return {
		init: function(element){
			handleNavbar(element);
		}
	}
}();