function logoutUser() {
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
<<<<<<< HEAD
        headers: getKinveyUserAuthHeaders()
=======
        headers: getKinveyUserAuthHeaders(),
>>>>>>> biskazz/master
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