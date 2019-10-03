$(document).ready(function() {
	$(".btn_plus").click(function(event) {
		event.preventDefault();
		$('.formDiv').show();
	})
	$(".btn_cancel").click(function(event) {
		event.preventDefault();
		$('.formDiv').hide();
	})
	$(".btn_ok").click(function(event) {
		event.preventDefault();
		$("#new_todo_form").submit();

		let fuck_uglifier = $('#content input');
		let has_init = false;

		fuck_uglifier.iCheck({
			checkboxClass: 'icheckbox_square-blue',
			radioClass: 'iradio_square-blue',
		});

		fuck_uglifier.on('ifChecked', function(event){
			$(event.target).parent().next().css('text-decoration-line', 'line-through');
			if (has_init) {
				$(event.target).parent().parent().submit();
			}
		});

		fuck_uglifier.on('ifUnchecked', function (event) {
			$(event.target).parent().next().css('text-decoration-line', 'initial');
			if (has_init) {
				$(event.target).parent().parent().submit();
			}
		});
	})
});

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
