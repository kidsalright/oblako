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
	})
});
