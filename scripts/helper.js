/*App constants*/
const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_S1uGCNPzg";
const kinveyAppSecret = "cd10e48c60494447bdc39005926a2b56";

function getSampleUserAuthHeaders() {
    return {
        'Authorization': "Basic " + btoa("gosho:gosho"),
    };
}

function getKinveyAppAuthHeaders() {
    return {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };
}

function getKinveyUserAuthHeaders() {
    return {
        'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
    };
}

function handleAjaxError(err) {
    console.dir(err);
    showErrorAlert(err.statusText)
}

function showHideMenuLinks() {
    $("nav ul li a").hide();
    if (sessionStorage.getItem("authToken")) {
        $(".homeViewButton").show();
        $(".galleryViewButton").show();
        $(".uploadViewButton").show();
        $(".usersViewButton").show();
        $(".logoutButton").show();
    } else {
        $(".homeViewButton").show();
        $(".loginViewButton").show();
        $(".registerViewButton").show();
        $('.loggedInUser').text("");
    }
}

$(document).on({
    ajaxStart: function () {
        $(".progress").show()
    },
    ajaxStop: function () {
        $(".progress").hide()
    }
});

function showSuccessAlert(str) {
    alertify.success(str);
}

function showErrorAlert(str){
    alertify.error(str);
}