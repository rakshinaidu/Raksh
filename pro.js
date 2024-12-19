$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Form field values
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const password = $("#password").val();

        // Validation
        if (!firstName || !lastName || !email || !phone || !password) {
            alert("Please fill out all fields.");
            return;
        }

        // Submit the form using AJAX
        $.ajax({
            url: "process.php",
            type: "POST",
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password: password
            },
            success: function (response) {
                $("#response").html(response);
            }
        });
    });
});
