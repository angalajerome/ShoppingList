$(document).ready(function() {
	$(document).on('click','.item', function() {
		$(this).toggle(1000);    
	});

	$('#button').click(function(){
		var toAdd = $('input[name=checkListItem]').val();
		$('.list').append('<div class="item">' + toAdd + '</div>');
		});
	$('#button').mouseenter(function() {
		$('#button').fadeTo('fast',1);
	});
	$('#button').mouseleave(function() {
		$('#button').fadeTo('fast',0.5);  
	});
});
