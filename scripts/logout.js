function logoutUser() {
    // $.ajax({
    //     method: "POST",
    //     url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures",
    //     headers: getKinveyUserAuthHeaders(),
    //     success: logoutSuccess,
    //     // error: handleAjaxError
    // });
    //
    // function logoutSuccess() {
        sessionStorage.clear();
        showHomeView();
        showHideMenuLinks()
    // }
}