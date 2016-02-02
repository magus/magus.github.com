// Author: Noah M. Jorgensen

$(function(){
	$('.ingredient-box .display-all').click(function(){
		$(this).toggleClass('selected');
		var $checkbox = $(this).find('input:checkbox');
       $checkbox.attr('checked', !$checkbox.attr('checked'));
	});

	$('.ingredient-box .search-button').click(function(){
		$('#ingredient-form').submit();
	});

	$('.recipe-results-nav-button').click(function(){
		var id = $(this).attr('target');
		//hide all results
		$('#recipe-results').children(':visible').fadeOut();
		//display the targetted effect count recipe results
		$("#"+id).fadeIn();
	});

});
