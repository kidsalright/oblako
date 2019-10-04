$(document).ready(function() {

	$('input').on('ifCreated', function(event){
		if ($(this).attr('value')=='true') {
			$(this).iCheck('check'); 
			$('#todo_text_'+$(this).attr('id')).addClass('checked');}
	});

	$('input').iCheck({checkboxClass: 'icheckbox_square-blue'});

	$('input').on('ifChecked', function(event){
		$(this).children('label').children('.todo-text').addClass('checked');
	});

	$('input').on('ifUnchecked', function(event){
		$(this).children('label').children('.todo-text').removeClass('checked');
	});

	$('input').on('ifClicked', function(event){
		$('#submit_'+$(this).attr('id')).click();
	});

	$("#link_create").click(function(event) {
		$("#create_todo_form").submit();
	});

	$('#todo_icon, #link_close').click(function(event){
		$('.background').toggle();
	});

	$("#selection").select2({
		minimumResultsForSearch: -1
	});
});
