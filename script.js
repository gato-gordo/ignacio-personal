$(document).ready(function(){
	$('.button').click(function(event){
		event.preventDefault();
		event.stopPropagation();
		//console.log($(this).parent().find('a'));
		$(this).parent().find('a')[0].click();
	});
});
