$(document).ready(function () {
	
	$("#request-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$('.thank-popup').fadeIn();
		});
		return false;
	});

});