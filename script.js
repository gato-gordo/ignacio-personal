$(document).ready(function(){
	$('.button').click(function(event){
		event.preventDefault();
		event.stopPropagation()
		$(this).parent().find('a')[0].click();
	});
});
