function logoutUser() {
<<<<<<< HEAD
=======

    /*VIJ SE KVO PRAISH WE STOQNE*/
>>>>>>> biskazz/master
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures/",
        headers: getKinveyUserAuthHeaders(),
        success: logoutSuccess,
        error: handleAjaxError
    });

<<<<<<< HEAD
=======


>>>>>>> biskazz/master
    function logoutSuccess() {
        sessionStorage.clear();
        showHomeView();
        showHideMenuLinks();
        console.log("I am here");
        showSuccessAlert("Succesful logout!")
    }
}