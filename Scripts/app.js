$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$("form").submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $("form").serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $("form").attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$('#form-messages').removeClass('error');
			$('#form-messages').addClass('success');

			// Set the message text.
			$('#form-messages').text(response);

			// Clear the form.
			$('.your-name input').val('');
			$('.your-email').val('');
			$('.your-message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$('#form-messages').removeClass('success');
			$('#form-messages').addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$('#form-messages').text(data.responseText);
			} else {
				$('#form-messages').text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
