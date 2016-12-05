function logoutUser() {
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
        headers: getKinveyUserAuthHeaders(),
    }).then(logoutSuccess).catch(handleAjaxError);

    function logoutSuccess() {
        sessionStorage.clear();
        map.off();
        map.remove();
        $("#homeMap").empty();
        initMap();
        showHomeView();
        showHideMenuLinks();
        showSuccessAlert("Succesful logout!")
    }
}