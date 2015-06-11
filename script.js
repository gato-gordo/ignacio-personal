$(document).ready(function(){
	   $("#site-nav .column-three .button").click(function(event){
		  event.stopPropagation();
		  alert('clicked');
		  //$(this).next().find('a').trigger('click');
	   });
});
