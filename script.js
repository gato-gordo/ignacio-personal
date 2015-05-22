$(document).ready(function(){

	$("#site-nav nav").hide();

	$("#site-nav .column-three").hover(function(event){
		event.stopPropagation();
		$(this).find('nav').toggle();
	});

});