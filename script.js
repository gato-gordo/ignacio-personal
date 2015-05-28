$(document).ready(function(){
	
		if(document.documentElement.clientWidth > 750) {
			$("#site-nav nav").css('display', 'none');

			$("#site-nav .column-three").hover(function(event){
				event.stopPropagation();
				$(this).find('nav').toggle();
			});
		}

});