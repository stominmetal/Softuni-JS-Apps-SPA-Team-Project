function registerUser() {
    if ($('#password-register').val() == $('#confirm-password-register')) {
        let userData = {
            username: $('#user-register').val(),
            email: $('#email-register'),
            password: $('#password-register').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: getKinveyAppAuthHeaders(),
            success: registerSuccess,
            error: handleAjaxError
        })

    }
    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listBooks();
        showInfo('User registration successful.');
    }
}