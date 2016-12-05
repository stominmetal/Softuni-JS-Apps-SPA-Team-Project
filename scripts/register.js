function registerUser() {
    let pass = $('#password-register').val();
    let passConfirm = $('#confirm-password-register').val();
    let user = $('#user-register').val();
    let email = $('#email-register').val();
    let file = $('#uploadLogoSlector').prop('files')[0];


    let valid = true;

    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (user.length < 5) {
        valid = false;
        showErrorAlert("Username must be at least 5 characters!");
    }


    if (!email.match(pattern)) {
        valid = false;
        showErrorAlert("Invalid email!");
    }

    if (pass.length < 5) {
        valid = false;
        showErrorAlert("Password must be at least 5 characters!")
    }

    if (pass != passConfirm) {
        valid = false;
        showErrorAlert("Passwords do not match!");
    }

    if (valid) {
        resize.photo(file, 300, 'dataURL', function (resizedImage) {
            let userData = {
                username: user,
                email: email,
                password: pass,
                picture: resizedImage
            };
            sendRegisterRequest(userData);
        });

        function sendRegisterRequest(data) {
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
                headers: getKinveyAppAuthHeaders(),
                data: data,
            }).then(registerSuccess).catch(handleAjaxError);

            function registerSuccess(userInfo) {
                showLoginView();
                showSuccessAlert("Register Success!")
            }
        }
    }
}
