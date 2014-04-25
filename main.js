$(document).ready(function() {
	
	$("#mobilenav").click(function() {
		$("#nav").slideToggle();
	});

	$(window).on('resize', function() {
		if (window.innerWidth >= 800) {
			$("#nav").show();
		} else {
			$("#nav").hide();
		}
	})
});