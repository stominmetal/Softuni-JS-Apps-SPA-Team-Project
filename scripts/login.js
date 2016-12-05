function loginUser() {
    let userData = {
        username: $('#user-login').val(),
        password: $('#password-login').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
        headers: getKinveyAppAuthHeaders(),
        data: userData
    }).then(loginSuccess).catch(handleAjaxError);

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHomeView();
        showHideMenuLinks();
    }
}