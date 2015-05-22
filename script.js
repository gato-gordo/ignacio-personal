$(document).ready(function(){

	$("#site-nav nav").hide();

	$("#site-nav button").on('click', function(){
		$(this).find('nav').toggle();
	});

});