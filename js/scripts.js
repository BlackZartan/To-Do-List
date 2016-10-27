$(document).ready (function() {

	$('#submit').click(function() {
		event.preventDefault();
		// to add a list item
		var add = $('#todo').val();
		$('ul').append('<li id="listItem">' +add + '</li>');
		
	});

	$('#clearList').click(function() {
		$('#list ul li').remove();
	});

	$('#listItem').click(function() {
		alert("really?");
		console.log($(this).parent());
	});
	
});