function registerUser() {
    let pass = $('#password-register').val();
    let passConfirm = $('#confirm-password-register').val();
    let user = $('#user-register').val();
    let email = $('#email-register').val();

    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (user.length > 4) {
        if (email.match(pattern)) {
            if (pass.length > 4) {
                if (pass == passConfirm) {
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
                        success: registerSuccess,
                        error: handleAjaxError
                    });
                }  else {
                    showErrorAlert("Passwords do not match!");
                }
            } else {
                showErrorAlert("Password must be at least 5 characters!")
            }
        } else {
            showErrorAlert("Invalid email!");
        }
    } else {
        showErrorAlert("Username must be at least 5 characters!");
    }

    function registerSuccess(userInfo) {
        showLoginView();
    }
}