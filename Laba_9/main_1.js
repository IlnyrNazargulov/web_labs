$(document).ready(function(){
	$('#changeColor').bind({
		'mouseover':function() { $(this).css("color", "green"); },
		'mouseout':function() { $(this).css("color", "black"); },
	});

	$(".gallery_item").click(function(){
		if($(this).width()<=300){
			$(this).animate({width: '+=100px', height:'+=100px'},"slow");
		}
		else{
			$(this).animate({width: '-=100px', height: '-=100px'},"slow");
		}
	});
	$("#addText").click(function(){
		$(this).append(' добавленный текст');
	});
})