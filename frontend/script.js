$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); 

        const formData = $(this).serialize();

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                $('#response').html(response).fadeIn();
                $('#registrationForm')[0].reset(); 
            },
            error: function () {
                $('#response').html('<p style="color:red;">There was an error processing your request.</p>').fadeIn();
            }
        });
    });
});
