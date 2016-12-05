function loginUser() {
    let userData = {
        username: $('#user-login').val(),
        password: $('#password-login').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
        headers: getKinveyAppAuthHeaders(),
<<<<<<< HEAD
        data: userData
    }).then(loginSuccess).catch(handleAjaxError)
=======
        data: userData,
        success: loginSuccess,
        error: handleAjaxError
    });
>>>>>>> biskazz/master

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHomeView();
        showHideMenuLinks();
    }
<<<<<<< HEAD

=======
>>>>>>> biskazz/master
}