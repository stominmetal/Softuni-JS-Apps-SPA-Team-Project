function registerUser() {
    let pass = $('#password-register').val();
    let passConfirm = $('#confirm-password-register').val();
    let user = $('#user-register').val();
    let email = $('#email-register').val();

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
        let userData = {
            username: user,
            email: email,
            password: pass
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: getKinveyAppAuthHeaders(),
            data: userData,
        }).then(registerSuccess).catch(handleAjaxError);
    }

    function registerSuccess(userInfo) {
        showLoginView();
    }
}
