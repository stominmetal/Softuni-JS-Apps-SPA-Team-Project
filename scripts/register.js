function registerUser() {
    if ($('#password-register').val() == $('#confirm-password-register').val()) {
        let userData = {
            username: $('#user-register').val(),
            email: $('#email-register').val(),
            password: $('#password-register').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: getKinveyAppAuthHeaders(),
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
    } else {
        showErrorAlert("Passwords didn't match!")
    }
    function registerSuccess(userInfo) {
        showLoginView();
    }
}
