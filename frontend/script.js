$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = $(this).serialize(); // Serialize form data

        $.ajax({
            url: 'https://php-yimr.onrender.com/process.php', // Update with your backend URL
            type: 'POST',
            data: formData,
            success: function (response) {
                $('#response').html(response).fadeIn(); // Display response
            },
            error: function (xhr, status, error) {
                $('#response').html('<p style="color:red;">Error: ' + error + '</p>').fadeIn();
            }
        });
    });
});
