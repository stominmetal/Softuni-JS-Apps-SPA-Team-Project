function registerUser() {
    let pass = $('#password-register').val();
    let passConfirm = $('#confirm-password-register').val();
    let user = $('#user-register').val();
    let email = $('#email-register').val();

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
<<<<<<< HEAD
        // console.log(userData)
    } else {
        showRegisterView();
        showErrorAlert("Passwords do not match")
=======
    } else {
        showErrorAlert("Passwords didn't match!")
>>>>>>> biskazz/master
    }
    function registerSuccess(userInfo) {
        showLoginView();
    }
}

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    showSuccessAlert("Welcome, " + username + "!")
}